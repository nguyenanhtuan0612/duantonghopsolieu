'use strict';

const { Sequelize } = require('sequelize');
const Op = require('sequelize');
const reportModel = require('./model/report');
const teamModel = require('./model/team');
const userModel = require('./model/user');
const RPdetailModel = require('./model/RPdetail');

const sequelize = new Sequelize('THSL_0825_111120', 'postgres', 'newPassword', {
  host: '127.0.0.1',
  dialect: 'postgres',
  logging: false,
});

const User = userModel(sequelize, Sequelize);
const Team = teamModel(sequelize, Sequelize);
const Report = reportModel(sequelize, Sequelize);
const RpDetail = RPdetailModel(sequelize, Sequelize);

//associate
Team.hasMany(User, { foreignKey: 'team_id' });
User.belongsTo(Team, { foreignKey: 'team_id' });

User.hasMany(Report, { foreignKey: 'user_id' });
Report.belongsTo(User, { foreignKey: 'user_id' });

Report.hasMany(RpDetail, { foreignKey: 'rp_id' });
RpDetail.belongsTo(Report, { foreignKey: 'rp_id' });

sequelize.sync({ force: false }).then(console.log('Successful !!'));

module.exports = {
  Team,
  User,
  Report,
  RpDetail,
  Op,
};
