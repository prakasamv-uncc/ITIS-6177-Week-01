const app = require('express')();
app.get('/', (req, res ) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 8080;

app.listen(8080, function () {
    console.log('HelloWorld app listening on port 8080!');
  });