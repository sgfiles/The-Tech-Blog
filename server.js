const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// const routes = require('./Main/controllers');
const withAuth = require('./Main/utils/auth.js');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./Main/config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


// Set up Handlebars.js engine with custom helpers


const sess = {
  secret: 'Super secret',
  cookie: {
    maxAge: 3600000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess))
const hbs = exphbs.create({ withAuth });

//app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);
app.use(require('./Main/controllers/'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
