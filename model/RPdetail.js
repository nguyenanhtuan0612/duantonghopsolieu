'use strict';

module.exports = function(sequelize,DataTypes){
    return sequelize.define('RP_detail',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rp_id:{
            type: DataTypes.INTEGER,
            validate:{
                isInt:{
                    msg: 'Sai dữ liệu'
                }
            }
        },
        team_id:{
            type: DataTypes.INTEGER,
            validate:{
                isInt:{
                    msg: 'Sai dữ liệu'
                }
            }
        },
        type:{
            type: DataTypes.INTEGER,
            defaultValue: 1,
            validate:{
                isInt:{
                    msg: 'Sai dữ liệu'
                }
            }
        },
        mb_tt:{
            type: DataTypes.DOUBLE,
            defaultValue: 0,
            isNumeric:{
                msg:'Sai dữ liệu'
            }
        },
        mb_onl:{
            type: DataTypes.DOUBLE,
            defaultValue: 0,
            isNumeric:{
                msg:'Sai dữ liệu'
            }
        },
        mb_shopee:{
            type: DataTypes.DOUBLE,
            defaultValue: 0,
            isNumeric:{
                msg:'Sai dữ liệu'
            }
        },
        mb_blkd:{
            type: DataTypes.DOUBLE,
            defaultValue: 0,
            isNumeric:{
                msg:'Sai dữ liệu'
            }
        },
        mb_duan:{
            type: DataTypes.DOUBLE,
            defaultValue: 0,
            isNumeric:{
                msg:'Sai dữ liệu'
            }
        },
        mb_banle:{
            type: DataTypes.DOUBLE,
            defaultValue: 0,
            isNumeric:{
                msg:'Sai dữ liệu'
            }
        },
        mn_tt:{
            type: DataTypes.DOUBLE,
            defaultValue: 0,
            isNumeric:{
                msg:'Sai dữ liệu'
            }
        },
        mn_tiki:{
            type: DataTypes.DOUBLE,
            defaultValue: 0,
            isNumeric:{
                msg:'Sai dữ liệu'
            }
        },
        mn_duan:{
            type: DataTypes.DOUBLE,
            defaultValue: 0,
            isNumeric:{
                msg:'Sai dữ liệu'
            }
        },
        bizbooks_tt:{
            type: DataTypes.DOUBLE,
            defaultValue: 0,
            isNumeric:{
                msg:'Sai dữ liệu'
            }
        },
        bl_bm:{
            type: DataTypes.DOUBLE,
            defaultValue: 0,
            isNumeric:{
                msg:'Sai dữ liệu'
            }
        },
        bl_cn:{
            type: DataTypes.DOUBLE,
            defaultValue: 0,
            isNumeric:{
                msg:'Sai dữ liệu'
            }
        },
        mkt:{
            type: DataTypes.DOUBLE,
            defaultValue: 0,
            isNumeric:{
                msg:'Sai dữ liệu'
            }
        },
        mkt_bm:{
            type: DataTypes.DOUBLE,
            defaultValue: 0,
            isNumeric:{
                msg:'Sai dữ liệu'
            }
        },
    })
}