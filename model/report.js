'use strict';

module.exports = function(sequelize,DataTypes){
    return sequelize.define('report',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rp_name:{
            type: DataTypes.STRING,
            unique: true,
            validate:{
                len:{
                    args: [2,250],
                    msg: 'Tên báo cáo quá ngắn hoặc dài'
                }
            }
        },
        user_id:{
            type: DataTypes.INTEGER,
            validate:{
                isInt:{
                    msg: 'Sai dữ liệu'
                }
            }
        },
        week:{
            type: DataTypes.INTEGER,
            defaultValue: 1,
            validate:{
                isInt: {
                    msg: 'Sai dữ liệu'
                },
            }
        },
        month:{
            type: DataTypes.INTEGER,
            defaultValue: 1,
            validate:{
                isInt:{
                    msg: 'Sai dữ liệu'
                }
            }
        },
        year:{
            type: DataTypes.INTEGER,
            defaultValue: 2020,
            validate:{
                isInt:{
                    msg: 'Sai dữ liệu'
                }
            }
        },
        link:{
            type: DataTypes.STRING,
        },
    })
}