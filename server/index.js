const express = require('express');
const mongoose = require('mongoose');
//There's another library called express-session,
//which do the same but in a completely different way!
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
//Es solo require porque no ejecutamos nada del archivo
//Es muy importante que se require User antes que passport
require('./models/User');
require('./models/Survey');
require('./services/passport.js');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

//maxAge: How long will the cookie live in the browser?
//30 days 24hs 60 minutes 60 seconds 1000 miliseconds
//keys es para encriptar. podriamos poner varias para mayor seguridad, ya que es un array.
app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());



//Lo mismo que hacer:
/*
    const authRoutes = '../routes/authRoutes/');
    authRoutes(app)
    Directamente en una linea podemos hacer:
 */
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);


//Use process.env.PORT . If it is not defined, use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
