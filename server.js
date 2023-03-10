const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");

const helpers = require("./utils/helpers");

const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });

const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.DB_SECRET,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

// Turns on connection to db and makes the app listen to PORT
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening to port ${PORT}`));
});
