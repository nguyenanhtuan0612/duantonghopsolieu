'use strict';
let crypto = require('crypto');

module.exports = function(sequelize,DataTypes){
    return sequelize.define('user',{
        // id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        user_email: {
            type: DataTypes.STRING,
            unique: true,
            validate:{
                isEmail:{
                    msg: 'Sai Email'
                }
            }
        },
        google_id:{
            type: DataTypes.STRING,
        },
        user_displayName: {
            type: DataTypes.STRING,
            validate:{
                len:{
                    args: [2, 250],
                    msg: 'Tên quá ngắn hoặc dài'
                }
            }
        },
        user_fullName: {
            type: DataTypes.STRING,
            validate:{
                len:{
                    args: [2, 250],
                    msg: 'Tên quá ngắn hoặc dài'
                }
            }
        },
        team_id:{
            type :DataTypes.INTEGER,
            validate:{
                isInt:{
                    msg: 'Sai dữ liệu'
                }
            }
        },
        pictureLink:{
            type: DataTypes.STRING
        }
    },  
    {
        
        
        
    })
}