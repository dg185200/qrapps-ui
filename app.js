const express = require('express');
const hbs = require('express-hbs');
const path = require('path');

const appsRoutes = require('./routes/apps');
const adminRoutes = require('./routes/admin');

const app = express()
const port = 3000

app.use('/', adminRoutes);
app.use('/apps', appsRoutes);

app.use(express.static('public'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs.express4({
    defaultLayout: __dirname + '/views/layouts/main.hbs',
    layoutsDir: __dirname + '/views/layouts'
}));
app.set('view engine', 'hbs');

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))