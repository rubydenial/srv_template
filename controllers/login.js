const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db/db');
const keys = require('../config/keys');
const Login = require('../models/Login');

module.exports.login = async function (request, response) {
  const candidate = await Login.findOne({where: {login: request.body.login}});
  if (candidate) {
    const pswresult = bcrypt.compareSync(request.body.psw, candidate.psw);
    if (pswresult) {
      const token = jwt.sign({
        login: candidate.login
      }, keys.jwt, {expiresIn: 60 * 60});
      response.status(200).json({token: `Bearer ${token}`});
    } else {
      response.status(401).json({message: 'Wrong password.'});
    }
  } else {
    response.status(404).json({message: `User with login ${candidate} not found`});
  }
};

module.exports.register = async function (request, response) {
  if (request.body.login) {
    Login.sync();
    const candidate = await Login.findOne({where: {login: request.body.login}});
    if (candidate) {
      response.status(409).json({
        message: `Login ${request.body.login} already exist`
      });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(request.body.psw, salt);
      const sendObj = Object.assign({}, request.body, {psw: hash});
      console.log(sendObj);
      try {
        const data = await Login.create(sendObj);
        response.json(data);
      } catch (e) {
        response.send(`Error: ${e}`)
      }
    }
  } else {
    response.status(400).json({error: 'Bad Data'});
  }
};

module.exports.findAll = async function (request, response) {
  try {
    const records = await Login.findAll();
    response.json(records);
  } catch (e) {
    response.send(`Error: ${err}`);
  }
};

