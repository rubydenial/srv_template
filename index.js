const app = require('./app');
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Starting server on port ${port}`));

app.get('/', (request, response) => {
  console.log('sss+ ' + JSON.stringify(request.query));
  response.status(200).json({
    msg: 'Good job !!!'
  });
})