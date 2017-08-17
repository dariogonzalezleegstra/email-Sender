const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

//Es solo require porque no ejecutamos nada del archivo
require('./services/passport.js');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();


//Lo mismo que hacer:
/*
    const authRoutes = '../routes/authRoutes/');
    authRoutes(app)
    Directamente en una linea podemos hacer:
 */
require('./routes/authRoutes')(app);

//Use process.env.PORT . If it is not defined, use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
