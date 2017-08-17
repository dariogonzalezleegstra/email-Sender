const passport = require('passport');

module.exports = (app) => {

//No hace falta setear el string 'google',
//por defecto googleStrategy lo tiene asignado
app.get(
    '/auth/google',
    passport.authenticate('google', {

    })
);

app.get('/auth/google/callback', passport.authenticate('google'));

};
