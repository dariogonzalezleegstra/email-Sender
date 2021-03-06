const passport = require('passport');

module.exports = app => {
  //No hace falta setear el string 'google', por defecto googleStrategy lo tiene asignado
  app.get(
    '/auth/google',
    passport.authenticate(
      'google',
      {
        // scope: ['profile', 'email']
      }
    )
  );

  app.get(
      '/auth/google/callback',
      passport.authenticate('google'),
      (req, res) => {
        res.redirect('/surveys');
      }
  );

  //always first parameter is the route,
  //second parameter what it's going to be executed
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  //An URL to test if authentication works
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
