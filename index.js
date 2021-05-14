'use strict';

const { User, Team, Report } = require('./sequelize');
const express = require('express');
const handlebars = require('express-handlebars');
const Router = require('./routes');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const Auth = require('./auth');
const methodOverride = require('method-override');

const app = express();
const port = 4321;

//app.use
app.use(express.static('admin-lte'));
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  session({
    secret: 'keyboard cat',
    name: 'kaas',
    proxy: true,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

//Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set('view engine', 'hbs');

//Route
Router(app);

//Passport
Auth(app, passport);

app.post('/upload', function (req, res) {});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

function addTeam() {
  Team.create({ team_name: 'Kinh doanh' })
    .then(Team.create({ team_name: 'Changmi' }))
    .then(Team.create({ team_name: 'Kaixin' }))
    .then(Team.create({ team_name: 'TKBooks' }))
    .then(Team.create({ team_name: 'Saiwai' }))
    .then(Team.create({ team_name: 'MCBooks' }))
    .then(Team.create({ team_name: 'Công nghệ' }))
    .then(Team.create({ team_name: 'MCB' }));
}
//addTeam();
//console.log('13');
//User.update({team_id: '4' }, {where: {id: '1'}});
