const { User, Team, Report, RpDetail } = require('../sequelize');
const helper = require('../config/helper');
const formidable = require('formidable');
const getXlsx = require('../config/xlsx/getVal');
var today = new Date(); 
var status = 0;
var error = '';
var week = 0;
var month = 0;
var year = 0;
var nameteam = '';

class ReportController {
    //GET /reports/add
    addRp(req,res){
        if(!req.user){
            res.render('login');
        }
        else{
            if(status == 0){
                res.render('addreport',{
                    team: 'Thêm báo cáo',
                    username: req.user.user_displayName,
                    picturelink: req.user.pictureLink,
                    err : '',
                    week: getWeek(today),
                    month: today.getMonth() + 1,
                    year: today.getFullYear(),
                });
            }
            else{
                status = 0;
                res.render('addreport',{
                    team: 'Thêm báo cáo',
                    username: req.user.user_displayName,
                    picturelink: req.user.pictureLink,
                    err : error,
                    week: getWeek(today),
                    month: today.getMonth() |+ 1,
                    year: today.getFullYear(),
                });
                error = '';
            }
        }
    }

    //GET /reports
    reports(req,res){
        if(!req.user){
            res.render('login');
        }
        else{
            Report.findAll({
                include: {
                    model: User,
                    foreignKey: 'user_id',    
                    as: 'user',
                    attributes: ['user_displayName']      
                },
                attributes: ['id','rp_name','user.user_displayName','week','month','year','updatedAt']
            })
            .then(reports => {
                res.render('report',{
                    team: 'Báo cáo',
                    reports: reports,
                    username: req.user.user_displayName,
                    picturelink: req.user.pictureLink,
                    helpers: {
                        config_time: helper.config_time,
                    }
                })
            });
        }  
    }

    //POST /reports/store
    store(req,res){
        if(!req.user){
            res.render('login');
        }
        else{
            const form = formidable({ multiples: false });
            form.parse(req, (err, fields, files) => {
                if(files.rp_path.name == ''){
                    error = 'LỖI: Chưa chọn file báo cáo !!',
                    status = 1;
                    res.redirect('/reports/add');
                }
                else{
                    var path = files.rp_path.path;
                    Report.create({rp_name: fields.rp_name, user_id: req.user.id, week: fields.sel_week, month: fields.sel_month, year: fields.sel_year , link: 'null'})
                    .then(
                        rp => {
                            if(req.user.team_id == 1){
                                getXlsx.getKeHoachBanraTeamKDVal(path, rp.id, req.user.team_id);
                                getXlsx.getThucTeBanraTeamKDVal(path, rp.id, req.user.team_id);
                                getXlsx.getKeHoachThuTienTeamKDVal(path, rp.id, req.user.team_id);
                                getXlsx.getThucTeThuTienTeamKDVal(path, rp.id, req.user.team_id);
                            }
                            else{
                                getXlsx.getKeHoachBanRaCacTeamVal(path, rp.id, req.user.team_id);
                                getXlsx.getThucTeBanRaCacTeamVal(path, rp.id, req.user.team_id);
                            }
                        }
                    )
                    .then(
                        () => res.redirect('/reports')
                    )
                    .catch((err) => {
                        error = err.message,
                        status = 1;
                        res.redirect('/reports/add');
                    })
                }
                
            });
            
            
        }
    }

    //POST /reports/:id/detail
    detail(req,res){
        if(!req.user){
            res.render('login');
        }
        else{
            getTeamID(req.params.id)
            .then(
                dt => {
                    nameteam = dt.report.rp_name
                    week = dt.report.week;
                    month = dt.report.month;
                    year = dt.report.year;
                    if(dt.team_id == 1){
                        var dt1;
                        var dt2;
                        var dt3;
                        var dt4;
                        Promise.all([
                            getVal(1, req.params.id)
                            .then(
                                dt => {
                                    dt1 = dt;
                                }
                            ),
                            getVal(2, req.params.id)
                            .then(
                                dt => {
                                    dt2 = dt;
                                }
                            ),
                            getVal(3, req.params.id)
                            .then(
                                dt => {
                                    dt3 = dt;
                                }
                            ),
                            getVal(4, req.params.id)
                            .then(
                                dt => {
                                    dt4 = dt;
                                }
                            ),
                        ])
                        .then(
                            () => {
                                res.render('detailKD', {
                                    username: req.user.user_displayName,
                                    picturelink: req.user.pictureLink,
                                    week: week,
                                    month: month,
                                    year: year,
                                    helpers: {
                                        vndFormat: helper.vndFormat,
                                        setColor: helper.setColor,
                                    },

                                    mb_tt1: dt1.mb_tt,
                                    mb_onl1: dt1.mb_onl,
                                    mb_shopee1: dt1.mb_shopee,
                                    mb_blkd1: dt1.mb_blkd,
                                    mb_duan1: dt1.mb_duan,
                                    mb_banle1: dt1.mb_banle,
                                    bizbooks_tt1: dt1.bizbooks_tt,
                                    mn_tt1: dt1.mn_tt,
                                    mn_tiki1: dt1.mn_tiki,
                                    mn_duan1: dt1.mn_duan,
                                    mb1: dt1.mb_tt + dt1.mb_onl + dt1.mb_shopee + dt1.mb_blkd + dt1.mb_duan + dt1.mb_banle,
                                    mn1: dt1.mn_tt + dt1.mn_tiki + dt1.mn_duan,

                                    mb_tt2: dt2.mb_tt,
                                    mb_onl2: dt2.mb_onl,
                                    mb_shopee2: dt2.mb_shopee,
                                    mb_blkd2: dt2.mb_blkd,
                                    mb_duan2: dt2.mb_duan,
                                    mb_banle2: dt2.mb_banle,
                                    bizbooks_tt2: dt2.bizbooks_tt,
                                    mn_tt2: dt2.mn_tt,
                                    mn_tiki2: dt2.mn_tiki,
                                    mn_duan2: dt2.mn_duan,
                                    mb2: dt2.mb_tt + dt2.mb_onl + dt2.mb_shopee + dt2.mb_blkd + dt2.mb_duan + dt2.mb_banle,
                                    mn2: dt2.mn_tt + dt2.mn_tiki + dt2.mn_duan,

                                    per_mb_tt2: getPercent(dt2.mb_tt,dt1.mb_tt).toFixed(2),
                                    per_mb_onl2: getPercent(dt2.mb_onl,dt1.mb_onl).toFixed(2),
                                    per_mb_shopee2: getPercent(dt2.mb_shopee,dt1.mb_shopee).toFixed(2),
                                    per_mb_blkd2: getPercent(dt2.mb_blkd,dt1.mb_blkd).toFixed(2),
                                    per_mb_duan2: getPercent(dt2.mb_duan,dt1.mb_duan).toFixed(2),
                                    per_mb_banle2: getPercent(dt2.mb_banle,dt1.mb_banle).toFixed(2),
                                    per_bizbooks_tt2: getPercent(dt2.bizbooks_tt,dt1.bizbooks_tt).toFixed(2),
                                    per_mn_tt2: getPercent(dt2.mn_tt,dt1.mn_tt).toFixed(2),
                                    per_mn_tiki2: getPercent(dt2.mn_tiki,dt1.mn_tiki).toFixed(2),
                                    per_mn_duan2: getPercent(dt2.mn_duan,dt1.mn_duan).toFixed(2),
                                    per_mb2: getPercent(dt2.mb_tt + dt2.mb_onl + dt2.mb_shopee + dt2.mb_blkd + dt2.mb_duan + dt2.mb_banle,
                                        dt1.mb_tt + dt1.mb_onl + dt1.mb_shopee + dt1.mb_blkd + dt1.mb_duan + dt1.mb_banle).toFixed(2),
                                    per_mn2: getPercent(dt2.mn_tt + dt2.mn_tiki + dt2.mn_duan, dt1.mn_tt + dt1.mn_tiki + dt1.mn_duan).toFixed(2),
                                    
                                    mb_tt3: dt3.mb_tt,
                                    mb_onl3: dt3.mb_onl,
                                    mb_shopee3: dt3.mb_shopee,
                                    mb_blkd3: dt3.mb_blkd,
                                    mb_duan3: dt3.mb_duan,
                                    mb_banle3: dt3.mb_banle,
                                    bizbooks_tt3: dt3.bizbooks_tt,
                                    mn_tt3: dt3.mn_tt,
                                    mn_tiki3: dt3.mn_tiki,
                                    mn_duan3: dt3.mn_duan,
                                    mb3: dt3.mb_tt + dt3.mb_onl + dt3.mb_shopee + dt3.mb_blkd + dt3.mb_duan + dt3.mb_banle,
                                    mn3: dt3.mn_tt + dt3.mn_tiki + dt3.mn_duan,

                                    mb_tt4: dt4.mb_tt,
                                    mb_onl4: dt4.mb_onl,
                                    mb_shopee4: dt4.mb_shopee,
                                    mb_blkd4: dt4.mb_blkd,
                                    mb_duan4: dt4.mb_duan,
                                    mb_banle4: dt4.mb_banle,
                                    bizbooks_tt4: dt4.bizbooks_tt,
                                    mn_tt4: dt4.mn_tt,
                                    mn_tiki4: dt4.mn_tiki,
                                    mn_duan4: dt4.mn_duan,
                                    mb4: dt4.mb_tt + dt4.mb_onl + dt4.mb_shopee + dt4.mb_blkd + dt4.mb_duan + dt4.mb_banle,
                                    mn4: dt4.mn_tt + dt4.mn_tiki + dt4.mn_duan,

                                    per_mb_tt4: getPercent(dt4.mb_tt,dt3.mb_tt),
                                    per_mb_onl4: getPercent(dt4.mb_onl,dt3.mb_onl),
                                    per_mb_shopee4: getPercent(dt4.mb_shopee,dt3.mb_shopee),
                                    per_mb_blkd4: getPercent(dt4.mb_blkd,dt3.mb_blkd),
                                    per_mb_duan4: getPercent(dt4.mb_duan,dt3.mb_duan),
                                    per_mb_banle4: getPercent(dt4.mb_banle,dt3.mb_banle),
                                    per_bizbooks_tt4: getPercent(dt4.bizbooks_tt,dt3.bizbooks_tt),
                                    per_mn_tt4: getPercent(dt4.mn_tt,dt3.mn_tt),
                                    per_mn_tiki4: getPercent(dt4.mn_tiki,dt3.mn_tiki),
                                    per_mn_duan4: getPercent(dt4.mn_duan,dt3.mn_duan),
                                    per_mb4: getPercent(dt4.mb_tt + dt4.mb_onl + dt4.mb_shopee + dt4.mb_blkd + dt4.mb_duan + dt4.mb_banle,
                                        dt3.mb_tt + dt3.mb_onl + dt3.mb_shopee + dt3.mb_blkd + dt3.mb_duan + dt3.mb_banle),
                                    per_mn4: getPercent(dt4.mn_tt + dt4.mn_tiki + dt4.mn_duan, dt3.mn_tt + dt3.mn_tiki + dt3.mn_duan),
                                })
                            }
                        )
                    }
                    else{
                        var dt1;
                        var dt2;
                        Promise.all([
                            getVal(6, req.params.id)
                            .then(
                                dt => {
                                    dt1 = dt;
                                }
                            ),
                            getVal(5, req.params.id)
                            .then(
                                dt => {
                                    dt2 = dt;
                                }
                            )
                        ])
                        .then(
                            () => {
                                res.render('detailTeam', {
                                    username: req.user.user_displayName,
                                    picturelink: req.user.pictureLink,
                                    week: week,
                                    month: month,
                                    year: year,
                                    helpers: {
                                        vndFormat: helper.vndFormat,
                                        setColor: helper.setColor,
                                    },
        
                                    khmb_tt: dt2.mb_tt,
                                    khmb_onl: dt2.mb_onl,
                                    khmb_shopee: dt2.mb_shopee,
                                    khmb_duan: dt2.mb_duan,
                                    khmn_tt: dt2.mn_tt,
                                    khmn_tiki: dt2.mn_tiki,
                                    khmn_duan: dt2.mn_duan,
                                    khbl_bm: dt2.bl_bm,
                                    khbl_cn: dt2.bl_cn,
                                    khmkt: dt2.mkt,
                                    khmkt_bm: dt2.mkt_bm,
                                    khmb: dt2.mb_tt + dt2.mb_onl + dt2.mb_shopee + dt2.mb_duan,
                                    khmn: dt2.mn_tiki + dt2.mn_duan + dt2.mn_tt,
                                    khbl: dt2.bl_bm + dt2.bl_cn,
        
                                    ttmb_tt: dt1.mb_tt,
                                    ttmb_onl: dt1.mb_onl,
                                    ttmb_shopee: dt1.mb_shopee,
                                    ttmb_duan: dt1.mb_duan,
                                    ttmn_tt: dt1.mn_tt,
                                    ttmn_tiki: dt1.mn_tiki,
                                    ttmn_duan: dt1.mn_duan,
                                    ttbl_bm: dt1.bl_bm,
                                    ttbl_cn: dt1.bl_cn,
                                    ttmkt: dt1.mkt,
                                    ttmkt_bm: dt1.mkt_bm,
                                    ttmb: dt1.mb_tt + dt1.mb_onl + dt1.mb_shopee + dt1.mb_duan,
                                    ttmn: dt1.mn_tiki + dt1.mn_duan + dt1.mn_tt,
                                    ttbl: dt1.bl_bm + dt1.bl_cn,
        
                                    per_mb_tt: getPercent(dt1.mb_tt,dt2.mb_tt).toFixed(2),
                                    per_mb_onl: getPercent(dt1.mb_onl,dt2.mb_onl).toFixed(2),
                                    per_mb_shopee: getPercent(dt1.mb_shopee,dt2.mb_shopee).toFixed(2),
                                    per_mb_duan: getPercent(dt1.mb_duan,dt2.mb_duan).toFixed(2),
                                    per_mn_tt: getPercent(dt1.mn_tt,dt2.mn_tt).toFixed(2),
                                    per_mn_tiki: getPercent(dt1.mn_tiki,dt2.mn_tiki).toFixed(2),
                                    per_mn_duan: getPercent(dt1.mn_duan,dt2.mn_duan).toFixed(2),
                                    per_bl_bm: getPercent(dt1.bl_bm,dt2.bl_bm).toFixed(2),
                                    per_bl_cn: getPercent(dt1.bl_cn,dt2.bl_cn).toFixed(2),
                                    per_mkt: getPercent(dt1.mkt,dt2.mkt).toFixed(2),
                                    per_mkt_bm: getPercent(dt1.mkt_bm,dt2.mkt_bm).toFixed(2),
                                    per_mb: getPercent(dt1.mb_tt + dt1.mb_onl + dt1.mb_shopee + dt1.mb_duan,dt2.mb_tt + dt2.mb_onl + dt2.mb_shopee + dt2.mb_duan).toFixed(2),
                                    per_mn: getPercent(dt1.mn_tiki + dt1.mn_duan + dt1.mn_tt,dt2.mn_tiki + dt2.mn_duan + dt2.mn_tt).toFixed(2),
                                    per_bl: getPercent(dt1.bl_bm + dt1.bl_cn,dt2.bl_bm + dt2.bl_cn).toFixed(2),
                                    
                                })
                            }
                        )
                    }
                }
            )

        }; 
    } 

    //DELETE /reports/:id
    delete(req,res){
        if(!req.user){
            res.render('login');
        }
        Report.destroy({
            where: {
              id: req.params.id,
            }
        })
        .then(
            () => res.redirect('/reports')      
        )
    }
}

function getPercent(num1,num2){
    if(num2 == 0 && num1 > num2){
        return 100;
    }
    if(num2 == 0 && num1 == 0){
        return 0;
    }
    return num1 / num2 * 100;
}

function getVal(type,rp_id){
    return RpDetail.findOne({
        where: {
            type: type,
            rp_id: rp_id,
        }
        
    })
}

function getTeamID(rp_id){
    return RpDetail.findOne({
        include: {
            model: Report,
            foreignKey: 'rp_id',    
            as: 'report',
            attributes: ['rp_name','week','month','year']      
        },
        where: {
            rp_id: rp_id,
        },
        attributes: ['team_id','report.week','report.month','report.year','report.rp_name']
    })
}

function getWeek(today){
    var date = today.getDate();
    var day = today.getDay();

    var b = date - day;

    if(b < 1){
        return 1;
    }
    if(1 <= b && b < 8){
        return 2;
    }
    if(8 <= b && b < 16){
        return 3;
    }
    if(16 < b && b < 24){
        return 4;
    }
    if(24 < b){
        return 5;
    }
}

module.exports = new ReportController;

