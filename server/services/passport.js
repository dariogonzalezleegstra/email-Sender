const keys = require('../config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

//Siempre que avisar a passport que se termino
//la operacion. done(error, resultado)

//Serialize: Pasar el mongoose model a un ID
passport.serializeUser((user, done) => {
  //user.id is the autoincremental id generated for this user by mongodb
  //it's different from the google auth id
  done(null, user.id);
});

//Deserialize: Pasar de un id al mongoose model
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//console.developers.google.com
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      scope: ['profile', 'email'],
    },
    (accessToken, refreshToken, profile, done) => {
      //Using promise in a "select"
      //because is an asynchronous query

      User.findOne({
        googleId: profile.id,
      }).then(existingUser => {
        if (existingUser) {
          //Ya esta registrado
          done(null, existingUser);
        } else {
          new User({
            googleId: profile.id,
          })
            .save()
            .then(user => done(null, user));
          //"user" es el usuario ya insertado
          //(a diferencia de new User que es el objeto
          //antes de ser insertado
        }
      });
    }
  )
);
