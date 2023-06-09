const { Op } = require('sequelize');
const { User, Team, Report } = require('../sequelize');
const helper = require('../config/helper');
var status = 0;
var error = '';

class UserController {
  //GET /user
  user(req, res) {
    if (!req.user) {
      res.render('login');
    } else {
      User.findAll({
        include: {
          model: Team,
          foreignKey: 'team_id',
          as: 'team',
          attributes: ['team_name'],
        },
        attributes: ['user_fullName', 'user_email', 'team.team_name', 'createdAt'],
      }).then(users => {
        res.render('user', {
          team: 'Kinh doanh',
          users: users,
          username: req.user.user_displayName,
          picturelink: req.user.pictureLink,
          helpers: {
            config_time: helper.config_time,
          },
        });
      });
    }
  }

  //POST  /user/store
  store(req, res) {
    User.create({ user_displayName: req.body.user_name, user_fullName: req.body.display_name, team_id: req.body.sel_dep }, { where: { id: req.user.id } }).then(() => {
      error = 'Đã cập thông tin nhật thành công !!';
      status = 1;
      res.redirect('/users/profile');
    });
  }

  //POST  /user/store
  create(req, res) {
    User.create({ user_displayName: req.body.user_name, user_fullName: req.body.display_name, team_id: req.body.sel_dep }, { where: { id: req.user.id } }).then(() => {
      error = 'Đã cập thông tin nhật thành công !!';
      status = 1;
      res.redirect('/users/profile');
    });
  }

  //GET /profile
  profileCheck(req, res) {
    if (!req.user) {
      res.render('login');
    } else {
      if (req.user.team_id != 9) {
        res.redirect('/');
      } else {
        res.redirect('/users/profile');
      }
    }
  }

  profile(req, res) {
    if (!req.user) {
      res.render('login');
    } else {
      User.findOne({
        include: {
          model: Team,
          foreignKey: 'team_id',
          as: 'team',
          attributes: ['team_name'],
        },
        where: {
          google_id: req.user.google_id,
        },
      }).then(dt => {
        if (status == 0) {
          res.render('profile', {
            username: dt.user_displayName,
            picturelink: dt.pictureLink,
            user_email: dt.user_email,
            google_id: dt.google_id,
            fullName: dt.user_fullName,
            team_id: dt.team_id,
            team: dt.team.team_name,
            err: '',
          });
        } else {
          status = 0;
          res.render('profile', {
            username: dt.user_displayName,
            picturelink: dt.pictureLink,
            user_email: dt.user_email,
            google_id: dt.google_id,
            fullName: dt.user_fullName,
            team_id: dt.team_id,
            team: dt.team.team_name,
            err: error,
          });
        }
      });
    }
  }
}

module.exports = new UserController();
