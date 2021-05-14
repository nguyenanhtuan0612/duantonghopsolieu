var GoogleStrategy = require('passport-google-oauth2').Strategy;
var googleClient = require('./config/gg_client/google_client');
const { User, Team, Report } = require('./sequelize');
const siteController = require('./controller/SiteContoller');

function auth(app, passport) {
  //passport
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: googleClient.id,
        clientSecret: googleClient.secret,
        callbackURL: 'http://localhost:4321/auth/google/callback',
        passReqToCallback: true,
      },
      function (request, accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
          // To keep the example simple, the user's Google profile is returned to
          // represent the logged-in user.  In a typical application, you would want
          // to associate the Google account with a user record in your database,
          // and return that user instead.
          User.findOrCreate({
            where: {
              google_id: profile.id,
            },
            defaults: {
              user_email: profile.email,
              user_displayName: profile.displayName,
              user_fullName: profile.displayName,
              team_id: '8',
              pictureLink: profile.picture,
            },
          }).then(user => {
            return done(null, user[0]);
          });
        });
      }
    )
  );

  app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/users/profile/check',
      failureRedirect: '/login',
    })
  );

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
}

module.exports = auth;
