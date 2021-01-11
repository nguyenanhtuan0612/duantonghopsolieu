const { User, Team, Report, RpDetail, Op } = require('../sequelize');
const helper = require('../config/helper');
var today = new Date();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var dt_thang = [];
var mkt_thang = [];

class MCBooksController {
    //GET /dashboard
    dashboard(req,res){
        if(!req.user){
            res.render('login');
        }
        else{
            Promise.all([
                getValKH(month, year)
            .then(
                rpdt => {
                    set0KH();
                    for(var i = 0; i < rpdt.length; i++){
                        mb_tt_kh += rpdt[i].mb_tt;
                        mb_onl_kh += rpdt[i].mb_onl;
                        mb_shopee_kh += rpdt[i].mb_shopee;
                        mb_duan_kh += rpdt[i].mb_duan;
                        mn_tt_kh += rpdt[i].mn_tt;
                        mn_tiki_kh += rpdt[i].mn_tiki;
                        mn_duan_kh += rpdt[i].mn_duan;
                        bl_bm_kh += rpdt[i].bl_bm;
                        bl_cn_kh += rpdt[i].bl_cn;
                        mkt_kh += rpdt[i].mkt;
                        mkt_bm_kh += rpdt[i].mkt_bm;
                    }
                }
            ),
            getValTT(month, year)
            .then(
                rpdt => {
                    set0TT();
                    for(var i = 0; i < rpdt.length; i++){
                        mb_tt_tt += rpdt[i].mb_tt;
                        mb_onl_tt += rpdt[i].mb_onl;
                        mb_shopee_tt += rpdt[i].mb_shopee;
                        mb_duan_tt += rpdt[i].mb_duan;
                        mn_tt_tt += rpdt[i].mn_tt;
                        mn_tiki_tt += rpdt[i].mn_tiki;
                        mn_duan_tt += rpdt[i].mn_duan;
                        bl_bm_tt += rpdt[i].bl_bm;
                        bl_cn_tt += rpdt[i].bl_cn;
                        mkt_tt += rpdt[i].mkt;
                        mkt_bm_tt += rpdt[i].mkt_bm;
                    }
                }
            ),
            getValofMonth(dt_thang,mkt_thang,year),
            ])
            .then(
                () =>{
                    res.render('dashboardOtherTeams',{
                        username: req.user.user_displayName,
                        picturelink: req.user.pictureLink,
                        team: 'Mcbooks',
                        month: month,
                        year: year,
                        helpers: {
                            vndFormat: helper.vndFormat,
                            setColor: helper.setColor,
                        },
                        mb_tt_kh: mb_tt_kh,
                        mb_onl_kh: mb_onl_kh,
                        mb_shopee_kh: mb_shopee_kh,
                        mb_duan_kh: mb_duan_kh, 
                        mn_tt_kh: mn_tt_kh,
                        mn_tiki_kh: mn_tiki_kh,
                        mn_duan_kh: mn_duan_kh,
                        bl_bm_kh: bl_bm_kh,  
                        bl_cn_kh: bl_cn_kh, 
                        mkt_kh: mkt_kh,
                        mkt_bm_kh: mkt_bm_kh,
                        mb_tt_tt: mb_tt_tt, 
                        mb_onl_tt: mb_onl_tt, 
                        mb_shopee_tt: mb_shopee_tt, 
                        mb_duan_tt: mb_duan_tt, 
                        mn_tt_tt: mn_tt_tt, 
                        mn_tiki_tt: mn_tiki_tt, 
                        mn_duan_tt: mn_duan_tt, 
                        bl_bm_tt: bl_bm_tt,  
                        bl_cn_tt: bl_cn_tt, 
                        mkt_tt: mkt_tt, 
                        mkt_bm_tt: mkt_bm_tt,

                        per_mb_tt: getPercent(mb_tt_tt,mb_tt_kh).toFixed(2), 
                        per_mb_onl: getPercent(mb_onl_tt,mb_onl_kh).toFixed(2), 
                        per_mb_shopee: getPercent(mb_shopee_tt,mb_shopee_kh).toFixed(2), 
                        per_mb_duan: getPercent(mb_duan_tt,mb_duan_kh).toFixed(2), 
                        per_mn_tt: getPercent(mn_tt_tt,mn_tt_kh).toFixed(2), 
                        per_mn_tiki: getPercent(mn_tiki_tt,mn_tiki_kh).toFixed(2), 
                        per_mn_duan: getPercent(mn_duan_tt,mn_duan_kh).toFixed(2), 
                        per_bl_bm: getPercent(bl_bm_tt,bl_bm_kh).toFixed(2),  
                        per_bl_cn: getPercent(bl_cn_tt,bl_cn_kh).toFixed(2), 
                        per_mkt: getPercent(mkt_tt,mkt_kh).toFixed(2), 
                        per_mkt_bm: getPercent(mkt_bm_tt,mkt_bm_kh).toFixed(2),

                        dt_thang1: dt_thang[0],
                        dt_thang2: dt_thang[1],
                        dt_thang3: dt_thang[2],
                        dt_thang4: dt_thang[3],
                        dt_thang5: dt_thang[4],
                        dt_thang6: dt_thang[5],
                        dt_thang7: dt_thang[6],
                        dt_thang8: dt_thang[7],
                        dt_thang9: dt_thang[8],
                        dt_thang10: dt_thang[9],
                        dt_thang11: dt_thang[10],
                        dt_thang12: dt_thang[11],

                        mkt_thang1: mkt_thang[0],   
                        mkt_thang2: mkt_thang[1],
                        mkt_thang3: mkt_thang[2],
                        mkt_thang4: mkt_thang[3],
                        mkt_thang5: mkt_thang[4],
                        mkt_thang6: mkt_thang[5],
                        mkt_thang7: mkt_thang[6],
                        mkt_thang8: mkt_thang[7],
                        mkt_thang9: mkt_thang[8],
                        mkt_thang10: mkt_thang[9],
                        mkt_thang11: mkt_thang[10],
                        mkt_thang12: mkt_thang[11],
                    })
                }
            )
        }
    }
}

function getPercent(num1,num2){
    if(num2 == 0){
        return 0;
    }
    return num1 / num2 * 100;
}

function getValKH(mm, year){
    return RpDetail.findAll({
        include:{
            model: Report,
            foreignKey: 'rp_id',    
            as: 'report',
            where:{
                month: mm,
                year: year,
            },
            attributes: ['month']
        },
        where: {
            type: 5,
            team_id: 6,
        }
        
    })
}

function getValTT(mm, year){
    return RpDetail.findAll({
        include:{
            model: Report,
            foreignKey: 'rp_id',    
            as: 'report',
            where:{
                month: mm,
                year: year, 
            },
            attributes: ['month']
        },
        where: {
            type: 6,
            team_id: 6,
        }
        
    })
}

function set0KH(){
    mb_tt_kh = 0;
    mb_onl_kh = 0;
    mb_shopee_kh = 0;
    mb_duan_kh = 0; 
    mn_tt_kh = 0;
    mn_tiki_kh = 0;
    mn_duan_kh = 0;
    bl_bm_kh = 0;  
    bl_cn_kh = 0; 
    mkt_kh = 0;
    mkt_bm_kh = 0;
}

function set0TT(){
    mb_tt_tt = 0; 
    mb_onl_tt = 0; 
    mb_shopee_tt = 0; 
    mb_duan_tt = 0; 
    mn_tt_tt = 0; 
    mn_tiki_tt = 0; 
    mn_duan_tt = 0; 
    bl_bm_tt = 0;  
    bl_cn_tt = 0; 
    mkt_tt = 0; 
    mkt_bm_tt = 0;
}

function getValofMonth(array,mkt, year){
    getValTT(1, year)
    .then(
        rpdt => {
            array[0] = 0;
            mkt[0] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[0] += rpdt[i].mb_tt;
                array[0] += rpdt[i].mb_onl;
                array[0] += rpdt[i].mb_shopee;
                array[0] += rpdt[i].mb_duan;
                array[0] += rpdt[i].mn_tt;
                array[0] += rpdt[i].mn_tiki;
                array[0] += rpdt[i].mn_duan;
                array[0] += rpdt[i].bl_bm;
                array[0] += rpdt[i].bl_cn;
                mkt[0] += rpdt[i].mkt;
                mkt[0] += rpdt[i].mkt_bm;
            }
        } 
    ),
    getValTT(2, year)
    .then(
        rpdt => {
            array[1] = 0;
            mkt[1] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[1] += rpdt[i].mb_tt;
                array[1] += rpdt[i].mb_onl;
                array[1] += rpdt[i].mb_shopee;
                array[1] += rpdt[i].mb_duan;
                array[1] += rpdt[i].mn_tt;
                array[1] += rpdt[i].mn_tiki;
                array[1] += rpdt[i].mn_duan;
                array[1] += rpdt[i].bl_bm;
                array[1] += rpdt[i].bl_cn;
                mkt[1] += rpdt[i].mkt;
                mkt[1] += rpdt[i].mkt_bm;
            }
        } 
    ),
    getValTT(3, year)
    .then(
        rpdt => {
            array[2] = 0;
            mkt[2] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[2] += rpdt[i].mb_tt;
                array[2] += rpdt[i].mb_onl;
                array[2] += rpdt[i].mb_shopee;
                array[2] += rpdt[i].mb_duan;
                array[2] += rpdt[i].mn_tt;
                array[2] += rpdt[i].mn_tiki;
                array[2] += rpdt[i].mn_duan;
                array[2] += rpdt[i].bl_bm;
                array[2] += rpdt[i].bl_cn;
                mkt[2] += rpdt[i].mkt;
                mkt[2] += rpdt[i].mkt_bm;
            }
        } 
    ),
    getValTT(4, year)
    .then(
        rpdt => {
            array[3] = 0;
            mkt[3] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[3] += rpdt[i].mb_tt;
                array[3] += rpdt[i].mb_onl;
                array[3] += rpdt[i].mb_shopee;
                array[3] += rpdt[i].mb_duan;
                array[3] += rpdt[i].mn_tt;
                array[3] += rpdt[i].mn_tiki;
                array[3] += rpdt[i].mn_duan;
                array[3] += rpdt[i].bl_bm;
                array[3] += rpdt[i].bl_cn;
                mkt[3] += rpdt[i].mkt;
                mkt[3] += rpdt[i].mkt_bm;
            }
        } 
    ),
    getValTT(5, year)
    .then(
        rpdt => {
            array[4] = 0;
            mkt[4] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[4] += rpdt[i].mb_tt;
                array[4] += rpdt[i].mb_onl;
                array[4] += rpdt[i].mb_shopee;
                array[4] += rpdt[i].mb_duan;
                array[4] += rpdt[i].mn_tt;
                array[4] += rpdt[i].mn_tiki;
                array[4] += rpdt[i].mn_duan;
                array[4] += rpdt[i].bl_bm;
                array[4] += rpdt[i].bl_cn;
                mkt[4] += rpdt[i].mkt;
                mkt[4] += rpdt[i].mkt_bm;
            }
        } 
    ),
    getValTT(6, year)
    .then(
        rpdt => {
            array[5] = 0;
            mkt[5] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[5] += rpdt[i].mb_tt;
                array[5] += rpdt[i].mb_onl;
                array[5] += rpdt[i].mb_shopee;
                array[5] += rpdt[i].mb_duan;
                array[5] += rpdt[i].mn_tt;
                array[5] += rpdt[i].mn_tiki;
                array[5] += rpdt[i].mn_duan;
                array[5] += rpdt[i].bl_bm;
                array[5] += rpdt[i].bl_cn;
                mkt[5] += rpdt[i].mkt;
                mkt[5] += rpdt[i].mkt_bm;
            }
        } 
    ),
    getValTT(7, year)
    .then(
        rpdt => {
            array[6] = 0;
            mkt[6] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[6] += rpdt[i].mb_tt;
                array[6] += rpdt[i].mb_onl;
                array[6] += rpdt[i].mb_shopee;
                array[6] += rpdt[i].mb_duan;
                array[6] += rpdt[i].mn_tt;
                array[6] += rpdt[i].mn_tiki;
                array[6] += rpdt[i].mn_duan;
                array[6] += rpdt[i].bl_bm;
                array[6] += rpdt[i].bl_cn;
                mkt[6] += rpdt[i].mkt;
                mkt[6] += rpdt[i].mkt_bm;
            }
        } 
    )
    getValTT(8, year)
    .then(
        rpdt => {
            array[7] = 0;
            mkt[7] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[7] += rpdt[i].mb_tt;
                array[7] += rpdt[i].mb_onl;
                array[7] += rpdt[i].mb_shopee;
                array[7] += rpdt[i].mb_duan;
                array[7] += rpdt[i].mn_tt;
                array[7] += rpdt[i].mn_tiki;
                array[7] += rpdt[i].mn_duan;
                array[7] += rpdt[i].bl_bm;
                array[7] += rpdt[i].bl_cn;
                mkt[7] += rpdt[i].mkt;
                mkt[7] += rpdt[i].mkt_bm;
            }
        } 
    )
    getValTT(9, year)
    .then(
        rpdt => {
            array[8] = 0;
            mkt[8] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[8] += rpdt[i].mb_tt;
                array[8] += rpdt[i].mb_onl;
                array[8] += rpdt[i].mb_shopee;
                array[8] += rpdt[i].mb_duan;
                array[8] += rpdt[i].mn_tt;
                array[8] += rpdt[i].mn_tiki;
                array[8] += rpdt[i].mn_duan;
                array[8] += rpdt[i].bl_bm;
                array[8] += rpdt[i].bl_cn;
                mkt[8] += rpdt[i].mkt;
                mkt[8] += rpdt[i].mkt_bm;
            }
        } 
    ),
    getValTT(10, year)
    .then(
        rpdt => {
            array[9] = 0;
            mkt[9] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[9] += rpdt[i].mb_tt;
                array[9] += rpdt[i].mb_onl;
                array[9] += rpdt[i].mb_shopee;
                array[9] += rpdt[i].mb_duan;
                array[9] += rpdt[i].mn_tt;
                array[9] += rpdt[i].mn_tiki;
                array[9] += rpdt[i].mn_duan;
                array[9] += rpdt[i].bl_bm;
                array[9] += rpdt[i].bl_cn;
                mkt[9] += rpdt[i].mkt;
                mkt[9] += rpdt[i].mkt_bm;
            }
        } 
    ),
    getValTT(11, year)
    .then(
        rpdt => {
            array[10] = 0;
            mkt[10] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[10] += rpdt[i].mb_tt;
                array[10] += rpdt[i].mb_onl;
                array[10] += rpdt[i].mb_shopee;
                array[10] += rpdt[i].mb_duan;
                array[10] += rpdt[i].mn_tt;
                array[10] += rpdt[i].mn_tiki;
                array[10] += rpdt[i].mn_duan;
                array[10] += rpdt[i].bl_bm;
                array[10] += rpdt[i].bl_cn;
                mkt[10] += rpdt[i].mkt;
                mkt[10] += rpdt[i].mkt_bm;
            }
        } 
    )
    getValTT(12, year)
    .then(
        rpdt => {
            array[11] = 0;
            mkt[11] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[11] += rpdt[i].mb_tt;
                array[11] += rpdt[i].mb_onl;
                array[11] += rpdt[i].mb_shopee;
                array[11] += rpdt[i].mb_duan;
                array[11] += rpdt[i].mn_tt;
                array[11] += rpdt[i].mn_tiki;
                array[11] += rpdt[i].mn_duan;
                array[11] += rpdt[i].bl_bm;
                array[11] += rpdt[i].bl_cn;
                mkt[11] += rpdt[i].mkt;
                mkt[11] += rpdt[i].mkt_bm;
            }
        } 
    )
        
}

module.exports = new MCBooksController;