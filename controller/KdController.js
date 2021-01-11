const { User, Team, Report, RpDetail, Op } = require('../sequelize');
const helper = require('../config/helper');
var today = new Date();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var dt_thang = [];
var tt_thang = [];

class KdController {
    //GET /dashboard
    dashboard(req,res){
        if(!req.user){
            res.render('login');
        }
        else{
            Promise.all([
                set0BRKH(),
            getValBRKH(month, year)
            .then(
                rpdt => {
                    for(var i = 0; i < rpdt.length; i++){
                        mb_tt_kh_br += rpdt[i].mb_tt;
                        mb_onl_kh_br += rpdt[i].mb_onl;
                        mb_shopee_kh_br += rpdt[i].mb_shopee;
                        mb_blkd_kh_br += rpdt[i].mb_blkd;
                        mb_duan_kh_br += rpdt[i].mb_duan;
                        mb_banle_kh_br += rpdt[i].mb_banle;
                        mn_tt_kh_br += rpdt[i].mn_tt;
                        mn_tiki_kh_br += rpdt[i].mn_tiki;
                        mn_duan_kh_br += rpdt[i].mn_duan;
                        bizbooks_tt_kh_br += rpdt[i].bizbooks_tt;
                    }
                }
            ),
            set0BRTT(),
            getValBRTT(month, year)
            .then(
                rpdt => {
                    for(var i = 0; i < rpdt.length; i++){
                        mb_tt_tt_br += rpdt[i].mb_tt;
                        mb_onl_tt_br += rpdt[i].mb_onl;
                        mb_shopee_tt_br += rpdt[i].mb_shopee;
                        mb_blkd_tt_br += rpdt[i].mb_blkd;
                        mb_duan_tt_br += rpdt[i].mb_duan;
                        mb_banle_tt_br += rpdt[i].mb_banle;
                        mn_tt_tt_br += rpdt[i].mn_tt;
                        mn_tiki_tt_br += rpdt[i].mn_tiki;
                        mn_duan_tt_br += rpdt[i].mn_duan;
                        bizbooks_tt_tt_br += rpdt[i].bizbooks_tt;
                    }
                }
            ),
            set0TTKH(),
            getValTTKH(month, year)
            .then(
                rpdt => {
                    for(var i = 0; i < rpdt.length; i++){
                        mb_tt_kh_tt += rpdt[i].mb_tt;
                        mb_onl_kh_tt += rpdt[i].mb_onl;
                        mb_shopee_kh_tt += rpdt[i].mb_shopee;
                        mb_blkd_kh_tt += rpdt[i].mb_blkd;
                        mb_duan_kh_tt += rpdt[i].mb_duan;
                        mb_banle_kh_tt += rpdt[i].mb_banle;
                        mn_tt_kh_tt += rpdt[i].mn_tt;
                        mn_tiki_kh_tt += rpdt[i].mn_tiki;
                        mn_duan_kh_tt += rpdt[i].mn_duan;
                        bizbooks_tt_kh_tt += rpdt[i].bizbooks_tt;
                    }
                }
            ),
            set0TTKH(),
            getValTTKH(month, year)
            .then(
                rpdt => {
                    for(var i = 0; i < rpdt.length; i++){
                        mb_tt_kh_tt += rpdt[i].mb_tt;
                        mb_onl_kh_tt += rpdt[i].mb_onl;
                        mb_shopee_kh_tt += rpdt[i].mb_shopee;
                        mb_blkd_kh_tt += rpdt[i].mb_blkd;
                        mb_duan_kh_tt += rpdt[i].mb_duan;
                        mb_banle_kh_tt += rpdt[i].mb_banle;
                        mn_tt_kh_tt += rpdt[i].mn_tt;
                        mn_tiki_kh_tt += rpdt[i].mn_tiki;
                        mn_duan_kh_tt += rpdt[i].mn_duan;
                        bizbooks_tt_kh_tt += rpdt[i].bizbooks_tt;
                    }
                }
            ),
            set0TTTT(),
            getValTTTT(month, year)
            .then(
                rpdt => {
                    for(var i = 0; i < rpdt.length; i++){
                        mb_tt_tt_tt += rpdt[i].mb_tt;
                        mb_onl_tt_tt += rpdt[i].mb_onl;
                        mb_shopee_tt_tt += rpdt[i].mb_shopee;
                        mb_blkd_tt_tt += rpdt[i].mb_blkd;
                        mb_duan_tt_tt += rpdt[i].mb_duan;
                        mb_banle_tt_tt += rpdt[i].mb_banle;
                        mn_tt_tt_tt += rpdt[i].mn_tt;
                        mn_tiki_tt_tt += rpdt[i].mn_tiki;
                        mn_duan_tt_tt += rpdt[i].mn_duan;
                        bizbooks_tt_tt_tt += rpdt[i].bizbooks_tt;
                    }
                }
            ),
            getValofMonthBR(dt_thang,year),
            getValofMonthTT(tt_thang,year),
            ])
            .then(
                () =>{
                    res.render('dashboardKD',{
                        username: req.user.user_displayName,
                        picturelink: req.user.pictureLink,
                        team: 'Kinh doanh',
                        month: month,
                        year: year,
                        helpers: {
                            vndFormat: helper.vndFormat,
                            setColor: helper.setColor,
                        },
                        mb_tt_kh_br: mb_tt_kh_br,
                        mb_onl_kh_br: mb_onl_kh_br,
                        mb_shopee_kh_br: mb_shopee_kh_br,
                        mb_blkd_kh_br: mb_blkd_kh_br,
                        mb_duan_kh_br: mb_duan_kh_br,
                        mb_banle_kh_br: mb_banle_kh_br,
                        mn_tt_kh_br: mn_tt_kh_br,
                        mn_tiki_kh_br: mn_tiki_kh_br,
                        mn_duan_kh_br: mn_duan_kh_br,
                        bizbooks_tt_kh_br: bizbooks_tt_kh_br,

                        mb_tt_tt_br: mb_tt_tt_br,
                        mb_onl_tt_br: mb_onl_tt_br,
                        mb_shopee_tt_br: mb_shopee_tt_br,
                        mb_blkd_tt_br: mb_blkd_tt_br,
                        mb_duan_tt_br: mb_duan_tt_br,
                        mb_banle_tt_br: mb_banle_tt_br,
                        mn_tt_tt_br: mn_tt_tt_br,
                        mn_tiki_tt_br: mn_tiki_tt_br,
                        mn_duan_tt_br: mn_duan_tt_br,
                        bizbooks_tt_tt_br: bizbooks_tt_tt_br,

                        mb_tt_kh_tt: mb_tt_kh_tt,
                        mb_onl_kh_tt: mb_onl_kh_tt,
                        mb_shopee_kh_tt: mb_shopee_kh_tt,
                        mb_blkd_kh_tt: mb_blkd_kh_tt,
                        mb_duan_kh_tt: mb_duan_kh_tt,
                        mb_banle_kh_tt: mb_banle_kh_tt,
                        mn_tt_kh_tt: mn_tt_kh_tt,
                        mn_tiki_kh_tt: mn_tiki_kh_tt,
                        mn_duan_kh_tt: mn_duan_kh_tt,
                        bizbooks_tt_kh_tt: bizbooks_tt_kh_tt,

                        mb_tt_tt_tt: mb_tt_tt_tt,
                        mb_onl_tt_tt: mb_onl_tt_tt,
                        mb_shopee_tt_tt: mb_shopee_tt_tt,
                        mb_blkd_tt_tt: mb_blkd_tt_tt,
                        mb_duan_tt_tt: mb_duan_tt_tt,
                        mb_banle_tt_tt: mb_banle_tt_tt,
                        mn_tt_tt_tt: mn_tt_tt_tt,
                        mn_tiki_tt_tt: mn_tiki_tt_tt,
                        mn_duan_tt_tt: mn_duan_tt_tt,
                        bizbooks_tt_tt_tt: bizbooks_tt_tt_tt,

                        per_mb_tt_br: getPercent(mb_tt_tt_br, mb_tt_kh_br).toFixed(2),
                        per_mb_onl_br: getPercent(mb_onl_tt_br, mb_onl_kh_br).toFixed(2),
                        per_mb_shopee_br: getPercent(mb_shopee_tt_br, mb_shopee_kh_br).toFixed(2),
                        per_mb_blkd_br: getPercent(mb_blkd_tt_br, mb_blkd_kh_br).toFixed(2),
                        per_mb_duan_br: getPercent(mb_duan_tt_br, mb_duan_kh_br).toFixed(2),
                        per_mb_banle_br: getPercent(mb_banle_tt_br, mb_banle_kh_br).toFixed(2),
                        per_mn_tt_br: getPercent(mn_tt_tt_br, mn_tt_kh_br).toFixed(2),
                        per_mn_tiki_br: getPercent(mn_tiki_tt_br, mn_tiki_kh_br).toFixed(2),
                        per_mn_duan_br: getPercent(mn_duan_tt_br, mn_duan_kh_br).toFixed(2),
                        per_bizbooks_tt_br: getPercent(bizbooks_tt_tt_br, bizbooks_tt_kh_br).toFixed(2),

                        per_mb_tt_tt: getPercent(mb_tt_tt_tt, mb_tt_kh_tt).toFixed(2),
                        per_mb_onl_tt: getPercent(mb_onl_tt_tt, mb_onl_kh_tt).toFixed(2),
                        per_mb_shopee_tt: getPercent(mb_shopee_tt_tt, mb_shopee_kh_tt).toFixed(2),
                        per_mb_blkd_tt: getPercent(mb_blkd_tt_tt, mb_blkd_kh_tt).toFixed(2),
                        per_mb_duan_tt: getPercent(mb_duan_tt_tt, mb_duan_kh_tt).toFixed(2),
                        per_mb_banle_tt: getPercent(mb_banle_tt_tt, mb_banle_kh_tt).toFixed(2),
                        per_mn_tt_tt: getPercent(mn_tt_tt_tt, mn_tt_kh_tt).toFixed(2),
                        per_mn_tiki_tt: getPercent(mn_tiki_tt_tt, mn_tiki_kh_tt).toFixed(2),
                        per_mn_duan_tt: getPercent(mn_duan_tt_tt, mn_duan_kh_tt).toFixed(2),
                        per_bizbooks_tt_tt: getPercent(bizbooks_tt_tt_tt, bizbooks_tt_kh_tt).toFixed(2),

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

                        tt_thang1: tt_thang[0],   
                        tt_thang2: tt_thang[1],
                        tt_thang3: tt_thang[2],
                        tt_thang4: tt_thang[3],
                        tt_thang5: tt_thang[4],
                        tt_thang6: tt_thang[5],
                        tt_thang7: tt_thang[6],
                        tt_thang8: tt_thang[7],
                        tt_thang9: tt_thang[8],
                        tt_thang10: tt_thang[9],
                        tt_thang11: tt_thang[10],
                        tt_thang12: tt_thang[11],
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

function getValBRKH(mm, year){
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
            type: 1,
            team_id: 1,
        }
        
    })
}

function getValBRTT(mm, year){
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
            type: 2,
            team_id: 1,
        }
        
    })
}

function getValTTKH(mm, year){
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
            type: 3,
            team_id: 1,
        }
        
    })
}

function getValTTTT(mm, year){
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
            type: 4,
            team_id: 1,
        }
        
    })
}

function set0BRKH(){
    mb_tt_kh_br = 0;
    mb_onl_kh_br = 0;
    mb_shopee_kh_br = 0;
    mb_blkd_kh_br = 0;
    mb_duan_kh_br = 0;
    mb_banle_kh_br = 0;
    mn_tt_kh_br = 0;
    mn_tiki_kh_br = 0;
    mn_duan_kh_br = 0;
    bizbooks_tt_kh_br = 0;
}

function set0BRTT(){
    mb_tt_tt_br = 0;
    mb_onl_tt_br = 0;
    mb_shopee_tt_br = 0;
    mb_blkd_tt_br = 0;
    mb_duan_tt_br = 0;
    mb_banle_tt_br = 0;
    mn_tt_tt_br = 0;
    mn_tiki_tt_br = 0;
    mn_duan_tt_br = 0;
    bizbooks_tt_tt_br = 0;
}

function set0TTKH(){
    mb_tt_kh_tt = 0;
    mb_onl_kh_tt = 0;
    mb_shopee_kh_tt = 0;
    mb_blkd_kh_tt = 0;
    mb_duan_kh_tt = 0;
    mb_banle_kh_tt = 0;
    mn_tt_kh_tt = 0;
    mn_tiki_kh_tt = 0;
    mn_duan_kh_tt = 0;
    bizbooks_tt_kh_tt = 0;
}

function set0TTTT(){
    mb_tt_tt_tt = 0;
    mb_onl_tt_tt = 0;
    mb_shopee_tt_tt = 0;
    mb_blkd_tt_tt = 0;
    mb_duan_tt_tt = 0;
    mb_banle_tt_tt = 0;
    mn_tt_tt_tt = 0;
    mn_tiki_tt_tt = 0;
    mn_duan_tt_tt = 0;
    bizbooks_tt_tt_tt = 0;
}

function getValofMonthBR(array, year){
    getValBRTT(1, year)
    .then(
        rpdt => {
            array[0] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[0] += rpdt[i].mb_tt;
                array[0] += rpdt[i].mb_onl;
                array[0] += rpdt[i].mb_shopee;
                array[0] += rpdt[i].mb_blkd;
                array[0] += rpdt[i].mb_duan;
                array[0] += rpdt[i].mb_banle;
                array[0] += rpdt[i].mn_tt;
                array[0] += rpdt[i].mn_tiki;
                array[0] += rpdt[i].mn_duan;
                array[0] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValBRTT(2, year)
    .then(
        rpdt => {
            array[1] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[1] += rpdt[i].mb_tt;
                array[1] += rpdt[i].mb_onl;
                array[1] += rpdt[i].mb_shopee;
                array[1] += rpdt[i].mb_blkd;
                array[1] += rpdt[i].mb_duan;
                array[1] += rpdt[i].mb_banle;
                array[1] += rpdt[i].mn_tt;
                array[1] += rpdt[i].mn_tiki;
                array[1] += rpdt[i].mn_duan;
                array[1] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValBRTT(3, year)
    .then(
        rpdt => {
            array[2] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[2] += rpdt[i].mb_tt;
                array[2] += rpdt[i].mb_onl;
                array[2] += rpdt[i].mb_shopee;
                array[2] += rpdt[i].mb_blkd;
                array[2] += rpdt[i].mb_duan;
                array[2] += rpdt[i].mb_banle;
                array[2] += rpdt[i].mn_tt;
                array[2] += rpdt[i].mn_tiki;
                array[2] += rpdt[i].mn_duan;
                array[2] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValBRTT(4, year)
    .then(
        rpdt => {
            array[3] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[3] += rpdt[i].mb_tt;
                array[3] += rpdt[i].mb_onl;
                array[3] += rpdt[i].mb_shopee;
                array[3] += rpdt[i].mb_blkd;
                array[3] += rpdt[i].mb_duan;
                array[3] += rpdt[i].mb_banle;
                array[3] += rpdt[i].mn_tt;
                array[3] += rpdt[i].mn_tiki;
                array[3] += rpdt[i].mn_duan;
                array[3] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValBRTT(5, year)
    .then(
        rpdt => {
            array[4] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[4] += rpdt[i].mb_tt;
                array[4] += rpdt[i].mb_onl;
                array[4] += rpdt[i].mb_shopee;
                array[4] += rpdt[i].mb_blkd;
                array[4] += rpdt[i].mb_duan;
                array[4] += rpdt[i].mb_banle;
                array[4] += rpdt[i].mn_tt;
                array[4] += rpdt[i].mn_tiki;
                array[4] += rpdt[i].mn_duan;
                array[4] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValBRTT(6, year)
    .then(
        rpdt => {
            array[5] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[5] += rpdt[i].mb_tt;
                array[5] += rpdt[i].mb_onl;
                array[5] += rpdt[i].mb_shopee;
                array[5] += rpdt[i].mb_blkd;
                array[5] += rpdt[i].mb_duan;
                array[5] += rpdt[i].mb_banle;
                array[5] += rpdt[i].mn_tt;
                array[5] += rpdt[i].mn_tiki;
                array[5] += rpdt[i].mn_duan;
                array[5] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValBRTT(7, year)
    .then(
        rpdt => {
            array[6] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[6] += rpdt[i].mb_tt;
                array[6] += rpdt[i].mb_onl;
                array[6] += rpdt[i].mb_shopee;
                array[6] += rpdt[i].mb_blkd;
                array[6] += rpdt[i].mb_duan;
                array[6] += rpdt[i].mb_banle;
                array[6] += rpdt[i].mn_tt;
                array[6] += rpdt[i].mn_tiki;
                array[6] += rpdt[i].mn_duan;
                array[6] += rpdt[i].bizbooks_tt;
            }
        } 
    )
    getValBRTT(8, year)
    .then(
        rpdt => {
            array[7] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[7] += rpdt[i].mb_tt;
                array[7] += rpdt[i].mb_onl;
                array[7] += rpdt[i].mb_shopee;
                array[7] += rpdt[i].mb_blkd;
                array[7] += rpdt[i].mb_duan;
                array[7] += rpdt[i].mb_banle;
                array[7] += rpdt[i].mn_tt;
                array[7] += rpdt[i].mn_tiki;
                array[7] += rpdt[i].mn_duan;
                array[7] += rpdt[i].bizbooks_tt;
            }
        } 
    )
    getValBRTT(9, year)
    .then(
        rpdt => {
            array[8] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[8] += rpdt[i].mb_tt;
                array[8] += rpdt[i].mb_onl;
                array[8] += rpdt[i].mb_shopee;
                array[8] += rpdt[i].mb_blkd;
                array[8] += rpdt[i].mb_duan;
                array[8] += rpdt[i].mb_banle;
                array[8] += rpdt[i].mn_tt;
                array[8] += rpdt[i].mn_tiki;
                array[8] += rpdt[i].mn_duan;
                array[8] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValBRTT(10, year)
    .then(
        rpdt => {
            array[9] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[9] += rpdt[i].mb_tt;
                array[9] += rpdt[i].mb_onl;
                array[9] += rpdt[i].mb_shopee;
                array[9] += rpdt[i].mb_blkd;
                array[9] += rpdt[i].mb_duan;
                array[9] += rpdt[i].mb_banle;
                array[9] += rpdt[i].mn_tt;
                array[9] += rpdt[i].mn_tiki;
                array[9] += rpdt[i].mn_duan;
                array[9] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValBRTT(11, year)
    .then(
        rpdt => {
            array[10] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[10] += rpdt[i].mb_tt;
                array[10] += rpdt[i].mb_onl;
                array[10] += rpdt[i].mb_shopee;
                array[10] += rpdt[i].mb_blkd;
                array[10] += rpdt[i].mb_duan;
                array[10] += rpdt[i].mb_banle;
                array[10] += rpdt[i].mn_tt;
                array[10] += rpdt[i].mn_tiki;
                array[10] += rpdt[i].mn_duan;
                array[10] += rpdt[i].bizbooks_tt;
            }
        } 
    )
    getValBRTT(12, year)
    .then(
        rpdt => {
            array[11] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[11] += rpdt[i].mb_tt;
                array[11] += rpdt[i].mb_onl;
                array[11] += rpdt[i].mb_shopee;
                array[11] += rpdt[i].mb_blkd;
                array[11] += rpdt[i].mb_duan;
                array[11] += rpdt[i].mb_banle;
                array[11] += rpdt[i].mn_tt;
                array[11] += rpdt[i].mn_tiki;
                array[11] += rpdt[i].mn_duan;
                array[11] += rpdt[i].bizbooks_tt;
            }
        } 
    )
        
}

function getValofMonthTT(array, year){
    getValTTTT(1, year)
    .then(
        rpdt => {
            array[0] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[0] += rpdt[i].mb_tt;
                array[0] += rpdt[i].mb_onl;
                array[0] += rpdt[i].mb_shopee;
                array[0] += rpdt[i].mb_blkd;
                array[0] += rpdt[i].mb_duan;
                array[0] += rpdt[i].mb_banle;
                array[0] += rpdt[i].mn_tt;
                array[0] += rpdt[i].mn_tiki;
                array[0] += rpdt[i].mn_duan;
                array[0] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValTTTT(2, year)
    .then(
        rpdt => {
            array[1] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[1] += rpdt[i].mb_tt;
                array[1] += rpdt[i].mb_onl;
                array[1] += rpdt[i].mb_shopee;
                array[1] += rpdt[i].mb_blkd;
                array[1] += rpdt[i].mb_duan;
                array[1] += rpdt[i].mb_banle;
                array[1] += rpdt[i].mn_tt;
                array[1] += rpdt[i].mn_tiki;
                array[1] += rpdt[i].mn_duan;
                array[1] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValTTTT(3, year)
    .then(
        rpdt => {
            array[2] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[2] += rpdt[i].mb_tt;
                array[2] += rpdt[i].mb_onl;
                array[2] += rpdt[i].mb_shopee;
                array[2] += rpdt[i].mb_blkd;
                array[2] += rpdt[i].mb_duan;
                array[2] += rpdt[i].mb_banle;
                array[2] += rpdt[i].mn_tt;
                array[2] += rpdt[i].mn_tiki;
                array[2] += rpdt[i].mn_duan;
                array[2] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValTTTT(4, year)
    .then(
        rpdt => {
            array[3] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[3] += rpdt[i].mb_tt;
                array[3] += rpdt[i].mb_onl;
                array[3] += rpdt[i].mb_shopee;
                array[3] += rpdt[i].mb_blkd;
                array[3] += rpdt[i].mb_duan;
                array[3] += rpdt[i].mb_banle;
                array[3] += rpdt[i].mn_tt;
                array[3] += rpdt[i].mn_tiki;
                array[3] += rpdt[i].mn_duan;
                array[3] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValTTTT(5, year)
    .then(
        rpdt => {
            array[4] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[4] += rpdt[i].mb_tt;
                array[4] += rpdt[i].mb_onl;
                array[4] += rpdt[i].mb_shopee;
                array[4] += rpdt[i].mb_blkd;
                array[4] += rpdt[i].mb_duan;
                array[4] += rpdt[i].mb_banle;
                array[4] += rpdt[i].mn_tt;
                array[4] += rpdt[i].mn_tiki;
                array[4] += rpdt[i].mn_duan;
                array[4] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValTTTT(6, year)
    .then(
        rpdt => {
            array[5] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[5] += rpdt[i].mb_tt;
                array[5] += rpdt[i].mb_onl;
                array[5] += rpdt[i].mb_shopee;
                array[5] += rpdt[i].mb_blkd;
                array[5] += rpdt[i].mb_duan;
                array[5] += rpdt[i].mb_banle;
                array[5] += rpdt[i].mn_tt;
                array[5] += rpdt[i].mn_tiki;
                array[5] += rpdt[i].mn_duan;
                array[5] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValTTTT(7, year)
    .then(
        rpdt => {
            array[6] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[6] += rpdt[i].mb_tt;
                array[6] += rpdt[i].mb_onl;
                array[6] += rpdt[i].mb_shopee;
                array[6] += rpdt[i].mb_blkd;
                array[6] += rpdt[i].mb_duan;
                array[6] += rpdt[i].mb_banle;
                array[6] += rpdt[i].mn_tt;
                array[6] += rpdt[i].mn_tiki;
                array[6] += rpdt[i].mn_duan;
                array[6] += rpdt[i].bizbooks_tt;
            }
        } 
    )
    getValTTTT(8, year)
    .then(
        rpdt => {
            array[7] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[7] += rpdt[i].mb_tt;
                array[7] += rpdt[i].mb_onl;
                array[7] += rpdt[i].mb_shopee;
                array[7] += rpdt[i].mb_blkd;
                array[7] += rpdt[i].mb_duan;
                array[7] += rpdt[i].mb_banle;
                array[7] += rpdt[i].mn_tt;
                array[7] += rpdt[i].mn_tiki;
                array[7] += rpdt[i].mn_duan;
                array[7] += rpdt[i].bizbooks_tt;
            }
        } 
    )
    getValTTTT(9, year)
    .then(
        rpdt => {
            array[8] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[8] += rpdt[i].mb_tt;
                array[8] += rpdt[i].mb_onl;
                array[8] += rpdt[i].mb_shopee;
                array[8] += rpdt[i].mb_blkd;
                array[8] += rpdt[i].mb_duan;
                array[8] += rpdt[i].mb_banle;
                array[8] += rpdt[i].mn_tt;
                array[8] += rpdt[i].mn_tiki;
                array[8] += rpdt[i].mn_duan;
                array[8] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValTTTT(10, year)
    .then(
        rpdt => {
            array[9] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[9] += rpdt[i].mb_tt;
                array[9] += rpdt[i].mb_onl;
                array[9] += rpdt[i].mb_shopee;
                array[9] += rpdt[i].mb_blkd;
                array[9] += rpdt[i].mb_duan;
                array[9] += rpdt[i].mb_banle;
                array[9] += rpdt[i].mn_tt;
                array[9] += rpdt[i].mn_tiki;
                array[9] += rpdt[i].mn_duan;
                array[9] += rpdt[i].bizbooks_tt;
            }
        } 
    ),
    getValTTTT(11, year)
    .then(
        rpdt => {
            array[10] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[10] += rpdt[i].mb_tt;
                array[10] += rpdt[i].mb_onl;
                array[10] += rpdt[i].mb_shopee;
                array[10] += rpdt[i].mb_blkd;
                array[10] += rpdt[i].mb_duan;
                array[10] += rpdt[i].mb_banle;
                array[10] += rpdt[i].mn_tt;
                array[10] += rpdt[i].mn_tiki;
                array[10] += rpdt[i].mn_duan;
                array[10] += rpdt[i].bizbooks_tt;
            }
        } 
    )
    getValTTTT(12, year)
    .then(
        rpdt => {
            array[11] = 0;
            for(var i = 0; i < rpdt.length; i++){  
                array[11] += rpdt[i].mb_tt;
                array[11] += rpdt[i].mb_onl;
                array[11] += rpdt[i].mb_shopee;
                array[11] += rpdt[i].mb_blkd;
                array[11] += rpdt[i].mb_duan;
                array[11] += rpdt[i].mb_banle;
                array[11] += rpdt[i].mn_tt;
                array[11] += rpdt[i].mn_tiki;
                array[11] += rpdt[i].mn_duan;
                array[11] += rpdt[i].bizbooks_tt;
            }
        } 
    )
        
}

module.exports = new KdController;