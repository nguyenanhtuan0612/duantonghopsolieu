'use strict';

module.exports = function(sequelize, DataTypes){
    return sequelize.define('team', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        team_name: {
            type: DataTypes.STRING,
            unique: true,
            validate:{
                len:{
                    args: [2, 250],
                    msg: 'Tên quá ngắn hoặc dài'
                }
            }
        }
    })
}