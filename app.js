const serve = require('koa-static');
const auth = require('koa-basic-auth');
const Koa = require('koa');
const app = new Koa();

// security of basic auth applications
app.use(auth({ name: 'admin', pass: 'admin' }));

// addition of html content
app.use(serve('./html'));

// set port default for heroku
const PORT = process.env.PORT || 5000;

app.listen(PORT);

console.log('listening on port:' + PORT);
