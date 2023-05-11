require('dotenv').config();
const express = require('express');
const db = require('./config/database')
const app = express();
const PORT = process.env.PORT || 8000;
const { connect, connection } = require('mongoose');
const Log = require('./models/logs');
const methodOverride = require('method-override')
const logsController = require('./controllers/logs')


const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set('view engine', 'jsx');
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set('views', './views');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
// The line below tells the server to look for static assets in the public folder, like css, imgs, or fonts
app.use(express.static('public'))

// Custom Middleware
app.use((req, res, next) => {
  console.log('Middleware running...');
  next();
});

app.use('/logs', logsController)

app.get('/*', (req, res) => {
    res.redirect('/logs')
  });


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });