const { User, Team, Report, RpDetail, Op } = require('../sequelize');
const helper = require('../config/helper');
var today = new Date();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var sumBRKDKH = 0;
var sumBROTKH = 0;
var sumBRKDTT = 0;
var sumBROTTT = 0;
var sumTTKDKH = 0;
var sumTTKDTT = 0;
var sumMktTT = 0;
var cm_kh_br = 0;
var cm_tt_mkt = 0;
var cm_tt_br = 0;
var kx_kh_br = 0;
var kx_tt_mkt = 0;
var kx_tt_br = 0;

var tk_kh_br = 0;
var tk_tt_mkt = 0;
var tk_tt_br = 0;

var sw_kh_br = 0;
var sw_tt_mkt = 0;
var sw_tt_br = 0;

var mc_kh_br = 0;
var mc_tt_mkt = 0;
var mc_tt_br = 0;

var sumBRKDTT1 = 0;
var sumBROTTT1 = 0;
var sumBRKDKH1 = 0;
var sumBROTKH1 = 0;

var sumMktTT1 = 0;

var dt_thang = [];
var tt_thang = [];


class SiteController {
    //GET /dashboard
    home(req,res){
        if(!req.user){
            res.render('login');
        }
        else{
            
            Promise.all([
                getValKDKHBR(month,year)
                .then(  
                    rpdt => {
                        sumBRKDKH = 0;
                        for(var i = 0; i < rpdt.length; i += 1){
                            sumBRKDKH += rpdt[i].mb_tt;
                            sumBRKDKH += rpdt[i].mb_onl;
                            sumBRKDKH += rpdt[i].mb_shopee;
                            sumBRKDKH += rpdt[i].mb_blkd;
                            sumBRKDKH += rpdt[i].mb_duan;
                            sumBRKDKH += rpdt[i].mb_banle;
                            sumBRKDKH += rpdt[i].mn_tt;
                            sumBRKDKH += rpdt[i].mn_tiki;
                            sumBRKDKH += rpdt[i].mn_duan;
                            sumBRKDKH += rpdt[i].bizbooks_tt;
                        }
                    }
                ),
                
                getValOTKHBR(month,year)
                .then(  
                    rpdt => {
                        sumBROTKH = 0;
                        for(var i = 0; i < rpdt.length; i += 1){
                            sumBROTKH += rpdt[i].mb_tt;
                            sumBROTKH += rpdt[i].mb_onl;
                            sumBROTKH += rpdt[i].mb_shopee;
                            sumBROTKH += rpdt[i].mb_duan;
                            sumBROTKH += rpdt[i].mn_tt;
                            sumBROTKH += rpdt[i].mn_tiki;
                            sumBROTKH += rpdt[i].mn_duan;
                            sumBROTKH += rpdt[i].bl_bm;
                            sumBROTKH += rpdt[i].bl_cn;
                        }
                    }
                ),
                
                getValKDKHBR(month -1,year)
                .then(  
                    rpdt => {
                        sumBRKDKH1 = 0;
                        for(var i = 0; i < rpdt.length; i += 1){
                            sumBRKDKH1 += rpdt[i].mb_tt;
                            sumBRKDKH1 += rpdt[i].mb_onl;
                            sumBRKDKH1 += rpdt[i].mb_shopee;
                            sumBRKDKH1 += rpdt[i].mb_blkd;
                            sumBRKDKH1 += rpdt[i].mb_duan;
                            sumBRKDKH1 += rpdt[i].mb_banle;
                            sumBRKDKH1 += rpdt[i].mn_tt;
                            sumBRKDKH1 += rpdt[i].mn_tiki;
                            sumBRKDKH1 += rpdt[i].mn_duan;
                            sumBRKDKH1 += rpdt[i].bizbooks_tt;
                        }
                    }
                ),
                
                getValOTKHBR(month - 1,year)
                .then(  
                    rpdt => {
                        sumBROTKH1 = 0;
                        for(var i = 0; i < rpdt.length; i += 1){
                            sumBROTKH1 += rpdt[i].mb_tt;
                            sumBROTKH1 += rpdt[i].mb_onl;
                            sumBROTKH1 += rpdt[i].mb_shopee;
                            sumBROTKH1 += rpdt[i].mb_duan;
                            sumBROTKH1 += rpdt[i].mn_tt;
                            sumBROTKH1 += rpdt[i].mn_tiki;
                            sumBROTKH1 += rpdt[i].mn_duan;
                            sumBROTKH1 += rpdt[i].bl_bm;
                            sumBROTKH1 += rpdt[i].bl_cn;
                        }
                    }
                ),
                
                getValKDTTBR(month -1,year)
                .then(  
                    rpdt => {
                        sumBRKDTT1 = 0;
                        for(var i = 0; i < rpdt.length; i += 1){
                            sumBRKDTT1 += rpdt[i].mb_tt;
                            sumBRKDTT1 += rpdt[i].mb_onl;
                            sumBRKDTT1 += rpdt[i].mb_shopee;
                            sumBRKDTT1 += rpdt[i].mb_blkd;
                            sumBRKDTT1 += rpdt[i].mb_duan;
                            sumBRKDTT1 += rpdt[i].mb_banle;
                            sumBRKDTT1 += rpdt[i].mn_tt;
                            sumBRKDTT1 += rpdt[i].mn_tiki;
                            sumBRKDTT1 += rpdt[i].mn_duan;
                            sumBRKDTT1 += rpdt[i].bizbooks_tt;
                        }
                    }
                ),
                
                getValOTTTBR(month - 1,year)
                .then(  
                    rpdt => {
                        sumBROTTT1 = 0;
                        sumMktTT1 = 0;
                        for(var i = 0; i < rpdt.length; i += 1){
                            sumBROTTT1 += rpdt[i].mb_tt;
                            sumBROTTT1 += rpdt[i].mb_onl;
                            sumBROTTT1 += rpdt[i].mb_shopee;
                            sumBROTTT1 += rpdt[i].mb_duan;
                            sumBROTTT1 += rpdt[i].mn_tt;
                            sumBROTTT1 += rpdt[i].mn_tiki;
                            sumBROTTT1 += rpdt[i].mn_duan;
                            sumBROTTT1 += rpdt[i].bl_bm;
                            sumBROTTT1 += rpdt[i].bl_cn;
                            sumMktTT1 += rpdt[i].mkt;
                            sumMktTT1 += rpdt[i].mkt_bm;
                        }
                    }
                ),
                
                getValOTTTBR(month,year)
                .then(
                    rpdt =>{
                        sumBROTTT = 0; 
                        sumMktTT = 0;
                        for(var i = 0; i < rpdt.length; i += 1){
                            sumBROTTT += rpdt[i].mb_tt;
                            sumBROTTT += rpdt[i].mb_onl;
                            sumBROTTT += rpdt[i].mb_shopee;
                            sumBROTTT += rpdt[i].mb_duan;
                            sumBROTTT += rpdt[i].mn_tt;
                            sumBROTTT += rpdt[i].mn_tiki;
                            sumBROTTT += rpdt[i].mn_duan;
                            sumBROTTT += rpdt[i].bl_bm;
                            sumBROTTT += rpdt[i].bl_cn;
                            sumMktTT += rpdt[i].mkt;
                            sumMktTT += rpdt[i].mkt_bm;
                        }
                    }
                ),
                
                getValKDTTBR(month,year)
                .then(
                    rpdt =>{
                        sumBRKDTT = 0; 
                        for(var i = 0; i < rpdt.length; i += 1){
                            sumBRKDTT += rpdt[i].mb_tt;
                            sumBRKDTT += rpdt[i].mb_onl;
                            sumBRKDTT += rpdt[i].mb_shopee;
                            sumBRKDTT += rpdt[i].mb_blkd;
                            sumBRKDTT += rpdt[i].mb_duan;
                            sumBRKDTT += rpdt[i].mb_banle;
                            sumBRKDTT += rpdt[i].mn_tt;
                            sumBRKDTT += rpdt[i].mn_tiki;
                            sumBRKDTT += rpdt[i].mn_duan;
                            sumBRKDTT += rpdt[i].bizbooks_tt;
                        }
                    }
                ),
    
                getValKDKHTT(month,year)
                .then(
                    rpdt=>{
                        sumTTKDKH = 0;
                        for(var i = 0; i < rpdt.length; i += 1){
                            sumTTKDKH += rpdt[i].mb_tt;
                            sumTTKDKH += rpdt[i].mb_onl;
                            sumTTKDKH += rpdt[i].mb_shopee;
                            sumTTKDKH += rpdt[i].mb_blkd;
                            sumTTKDKH += rpdt[i].mb_duan;
                            sumTTKDKH += rpdt[i].mb_banle;
                            sumTTKDKH += rpdt[i].mn_tt;
                            sumTTKDKH += rpdt[i].mn_tiki;
                            sumTTKDKH += rpdt[i].mn_duan;
                            sumTTKDKH += rpdt[i].bizbooks_tt;
                        }
                    }
                ),
    
                getValKDTTTT(month,year)
                .then(
                    rpdt=>{
                        sumTTKDTT = 0;
                        for(var i = 0; i < rpdt.length; i += 1){
                            sumTTKDTT += rpdt[i].mb_tt;
                            sumTTKDTT += rpdt[i].mb_onl;
                            sumTTKDTT += rpdt[i].mb_shopee;
                            sumTTKDTT += rpdt[i].mb_blkd;
                            sumTTKDTT += rpdt[i].mb_duan;
                            sumTTKDTT += rpdt[i].mb_banle;
                            sumTTKDTT += rpdt[i].mn_tt;
                            sumTTKDTT += rpdt[i].mn_tiki;
                            sumTTKDTT += rpdt[i].mn_duan;
                            sumTTKDTT += rpdt[i].bizbooks_tt;
                        }
                    }
                ),
    
                getValTeamKHBR(month,2,year)
                .then(
                    rpdt => {
                        cm_kh_br = 0;
                        for(var i = 0; i < rpdt.length; i++){
                            cm_kh_br += rpdt[i].mb_tt;
                            cm_kh_br += rpdt[i].mb_onl;
                            cm_kh_br += rpdt[i].mb_shopee;
                            cm_kh_br += rpdt[i].mb_duan;
                            cm_kh_br += rpdt[i].mn_tt;
                            cm_kh_br += rpdt[i].mn_tiki;
                            cm_kh_br += rpdt[i].mn_duan;
                            cm_kh_br += rpdt[i].bl_bm;
                            cm_kh_br += rpdt[i].bl_cn;
                            
                        }
                    }
                ),
    
                getValTeamTTBR(month,2,year)
                .then(
                    rpdt => {
                        cm_tt_mkt = 0;
                        cm_tt_br = 0;
                        for(var i = 0; i < rpdt.length; i++){
                            cm_tt_br += rpdt[i].mb_tt;
                            cm_tt_br += rpdt[i].mb_onl;
                            cm_tt_br += rpdt[i].mb_shopee;
                            cm_tt_br += rpdt[i].mb_duan;
                            cm_tt_br += rpdt[i].mn_tt;
                            cm_tt_br += rpdt[i].mn_tiki;
                            cm_tt_br += rpdt[i].mn_duan;
                            cm_tt_br += rpdt[i].bl_bm;
                            cm_tt_br += rpdt[i].bl_cn;
                            cm_tt_mkt += rpdt[i].mkt;
                            cm_tt_mkt += rpdt[i].mkt_bm;
                        }
                    }
                ),
    
                getValTeamKHBR(month,3,year)
                .then(
                    rpdt => {
                        kx_kh_br = 0;
                        for(var i = 0; i < rpdt.length; i++){
                            kx_kh_br += rpdt[i].mb_tt;
                            kx_kh_br += rpdt[i].mb_onl;
                            kx_kh_br += rpdt[i].mb_shopee;
                            kx_kh_br += rpdt[i].mb_duan;
                            kx_kh_br += rpdt[i].mn_tt;
                            kx_kh_br += rpdt[i].mn_tiki;
                            kx_kh_br += rpdt[i].mn_duan;
                            kx_kh_br += rpdt[i].bl_bm;
                            kx_kh_br += rpdt[i].bl_cn;
                        }
                    }
                ),
    
                getValTeamTTBR(month,3,year)
                .then(
                    rpdt => {
                        kx_tt_mkt = 0;
                        kx_tt_br = 0;
                        for(var i = 0; i < rpdt.length; i++){
                            kx_tt_br += rpdt[i].mb_tt;
                            kx_tt_br += rpdt[i].mb_onl;
                            kx_tt_br += rpdt[i].mb_shopee;
                            kx_tt_br += rpdt[i].mb_duan;
                            kx_tt_br += rpdt[i].mn_tt;
                            kx_tt_br += rpdt[i].mn_tiki;
                            kx_tt_br += rpdt[i].mn_duan;
                            kx_tt_br += rpdt[i].bl_bm;
                            kx_tt_br += rpdt[i].bl_cn;
                            kx_tt_mkt += rpdt[i].mkt;
                            kx_tt_mkt += rpdt[i].mkt_bm;
                        }
                    }
                ),
    
                getValTeamKHBR(month,4,year)
                .then(
                    rpdt => {
                        tk_kh_br = 0;
                        for(var i = 0; i < rpdt.length; i++){
                            tk_kh_br += rpdt[i].mb_tt;
                            tk_kh_br += rpdt[i].mb_onl;
                            tk_kh_br += rpdt[i].mb_shopee;
                            tk_kh_br += rpdt[i].mb_duan;
                            tk_kh_br += rpdt[i].mn_tt;
                            tk_kh_br += rpdt[i].mn_tiki;
                            tk_kh_br += rpdt[i].mn_duan;
                            tk_kh_br += rpdt[i].bl_bm;
                            tk_kh_br += rpdt[i].bl_cn;
                        }
                    }
                ),
    
                getValTeamTTBR(month,4,year)
                .then(
                    rpdt => {
                        tk_tt_mkt = 0;
                        tk_tt_br = 0;
                        for(var i = 0; i < rpdt.length; i++){
                            tk_tt_br += rpdt[i].mb_tt;
                            tk_tt_br += rpdt[i].mb_onl;
                            tk_tt_br += rpdt[i].mb_shopee;
                            tk_tt_br += rpdt[i].mb_duan;
                            tk_tt_br += rpdt[i].mn_tt;
                            tk_tt_br += rpdt[i].mn_tiki;
                            tk_tt_br += rpdt[i].mn_duan;
                            tk_tt_br += rpdt[i].bl_bm;
                            tk_tt_br += rpdt[i].bl_cn;
                            tk_tt_mkt += rpdt[i].mkt;
                            tk_tt_mkt += rpdt[i].mkt_bm;
                        }
                    }
                ),
    
                getValTeamKHBR(month,5,year)
                .then(
                    rpdt => {
                        sw_kh_br = 0;
                        for(var i = 0; i < rpdt.length; i++){
                            sw_kh_br += rpdt[i].mb_tt;
                            sw_kh_br += rpdt[i].mb_onl;
                            sw_kh_br += rpdt[i].mb_shopee;
                            sw_kh_br += rpdt[i].mb_duan;
                            sw_kh_br += rpdt[i].mn_tt;
                            sw_kh_br += rpdt[i].mn_tiki;
                            sw_kh_br += rpdt[i].mn_duan;
                            sw_kh_br += rpdt[i].bl_bm;
                            sw_kh_br += rpdt[i].bl_cn;
                        }
                    }
                ),
    
                getValTeamTTBR(month,5,year)
                .then(
                    rpdt => {
                        sw_tt_mkt = 0;
                        sw_tt_br = 0;
                        for(var i = 0; i < rpdt.length; i++){
                            sw_tt_br += rpdt[i].mb_tt;
                            sw_tt_br += rpdt[i].mb_onl;
                            sw_tt_br += rpdt[i].mb_shopee;
                            sw_tt_br += rpdt[i].mb_duan;
                            sw_tt_br += rpdt[i].mn_tt;
                            sw_tt_br += rpdt[i].mn_tiki;
                            sw_tt_br += rpdt[i].mn_duan;
                            sw_tt_br += rpdt[i].bl_bm;
                            sw_tt_br += rpdt[i].bl_cn;
                            sw_tt_mkt += rpdt[i].mkt;
                            sw_tt_mkt += rpdt[i].mkt_bm;
                        }
                    }
                ),
                
                getValTeamKHBR(month,6,year)
                .then(
                    rpdt => {
                        mc_kh_br = 0;
                        for(var i = 0; i < rpdt.length; i++){
                            mc_kh_br += rpdt[i].mb_tt;
                            mc_kh_br += rpdt[i].mb_onl;
                            mc_kh_br += rpdt[i].mb_shopee;
                            mc_kh_br += rpdt[i].mb_duan;
                            mc_kh_br += rpdt[i].mn_tt;
                            mc_kh_br += rpdt[i].mn_tiki;
                            mc_kh_br += rpdt[i].mn_duan;
                            mc_kh_br += rpdt[i].bl_bm;
                            mc_kh_br += rpdt[i].bl_cn;
                        }
                    }
                ),
    
                getValTeamTTBR(month,6,year)
                .then(
                    rpdt => {
                        mc_tt_mkt = 0;
                        mc_tt_br = 0;
                        for(var i = 0; i < rpdt.length; i++){
                            mc_tt_br += rpdt[i].mb_tt;
                            mc_tt_br += rpdt[i].mb_onl;
                            mc_tt_br += rpdt[i].mb_shopee;
                            mc_tt_br += rpdt[i].mb_duan;
                            mc_tt_br += rpdt[i].mn_tt;
                            mc_tt_br += rpdt[i].mn_tiki;
                            mc_tt_br += rpdt[i].mn_duan;
                            mc_tt_br += rpdt[i].bl_bm;
                            mc_tt_br += rpdt[i].bl_cn;
                            mc_tt_mkt += rpdt[i].mkt;
                            mc_tt_mkt += rpdt[i].mkt_bm;
                        }
                    }
                ),
                getValofMonthBR(dt_thang,year),
                getValofMonthTT(tt_thang,year),
            ])
            .then(
                () => {
                    res.render('home',{
                        username: req.user.user_displayName,
                        picturelink: req.user.pictureLink,
                        month: month,
                        year: year,
                        helpers: {
                            vndFormat: helper.vndFormat,
                            setColor: helper.setColor,
                            setArrow: helper.setArrow,
                            setColorArrow: helper.setColorArrow,
                            abs: helper.abs,
                        },
                        sumKH: sumBRKDKH + sumBROTKH,
                        sumTT: sumBRKDTT + sumBROTTT,
                        per_sum: getPercent(sumBRKDTT + sumBROTTT, sumBRKDKH + sumBROTKH).toFixed(2),

                        sumTTKH: sumTTKDKH,
                        sumTTTT: sumTTKDTT,
                        per_SumTT: getPercent(sumTTKDTT,sumTTKDKH).toFixed(2),

                        sumMktTT: sumMktTT,
                        per_Sum_Mkt: getPercent(sumMktTT,sumBROTTT).toFixed(2),

                        sumBRKDKH: sumBRKDKH,
                        sumBRKDTT: sumBRKDTT,
                        per_sumBRKD: getPercent(sumBRKDTT, sumBRKDKH).toFixed(2),

                        cm_kh_br: cm_kh_br,
                        cm_tt_br: cm_tt_br,
                        per_cm_br: getPercent(cm_tt_br,cm_kh_br).toFixed(2),
                        cm_tt_mkt: cm_tt_mkt,

                        kx_kh_br: kx_kh_br,
                        kx_tt_br: kx_tt_br,
                        per_kx_br: getPercent(kx_tt_br,kx_kh_br).toFixed(2),
                        kx_tt_mkt: kx_tt_mkt,

                        tk_kh_br: tk_kh_br,
                        tk_tt_br: tk_tt_br,
                        per_tk_br: getPercent(tk_tt_br,tk_kh_br).toFixed(2),
                        tk_tt_mkt: tk_tt_mkt,

                        sw_kh_br: sw_kh_br,
                        sw_tt_br: sw_tt_br,
                        per_sw_br: getPercent(sw_tt_br,sw_kh_br).toFixed(2),
                        sw_tt_mkt: sw_tt_mkt,

                        mc_kh_br: mc_kh_br,
                        mc_tt_br: mc_tt_br,
                        per_mc_br: getPercent(mc_tt_br,mc_kh_br).toFixed(2),
                        mc_tt_mkt: mc_tt_mkt,

                        sv_tc: sumBRKDTT + sumBROTTT - sumBRKDTT1 - sumBROTTT1,
                        per_sv_tc: getPercent(sumBRKDTT + sumBROTTT,sumBRKDTT1 + sumBROTTT1,).toFixed(2),

                        kh_sv_tc: sumBRKDKH + sumBROTKH - sumBRKDKH1 - sumBROTKH1,
                        per_kh_sv_tc: getPercent(sumBRKDKH + sumBROTKH,sumBRKDKH1 + sumBROTKH1,).toFixed(2),

                        sumMktTT1: sumMktTT - sumMktTT1,
                        per_mkt: getPercent(sumMktTT,sumMktTT1  ).toFixed(2),

                        bestper: bestPer(
                            getPercent(sumBRKDTT, sumBRKDKH),getPercent(cm_tt_br,cm_kh_br),
                            getPercent(kx_tt_br,kx_kh_br),getPercent(tk_tt_br,tk_kh_br),
                            getPercent(sw_tt_br,sw_kh_br),getPercent(mc_tt_br,mc_kh_br),
                        ),
                        bestteam: bestTeam(
                            getPercent(sumBRKDTT, sumBRKDKH),getPercent(cm_tt_br,cm_kh_br).toFixed(2),
                            getPercent(kx_tt_br,kx_kh_br),getPercent(tk_tt_br,tk_kh_br).toFixed(2),
                            getPercent(sw_tt_br,sw_kh_br),getPercent(mc_tt_br,mc_kh_br).toFixed(2),
                        ),

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
                    });
                }
            )
        }
    }

    //GET /login
    login(req,res){
        res.render('login');
    }

    //GET /register
    register(req,res){
        res.render('register');
    }

    
}

function bestPer(kd,changmi,kaixin,tk,saiwai,mc){
    var team = [kd, changmi,kaixin,tk,saiwai,mc];
    var max = team[1];
    for(var i = 0; i < team.length; i ++){
        if(team[i] >= max){
            max = team[i];
        }
    }
    return max.toFixed(2);
}

function bestTeam(kd,changmi,kaixin,tk,saiwai,mc){
    var team = [kd, changmi,kaixin,tk,saiwai,mc];
    var max = team[1];
    for(var i = 0; i < team.length; i ++){
        if(team[i] >= max){
            max = team[i];
        }
    }
    switch(max){
        case kd:{
            return 'Kinh doanh';
        }
        case changmi:{
            return 'Changmi';
        }
        case kaixin:{
            return 'Kaixin';
        }
        case tk:{
            return 'TKBooks';
        }
        case saiwai:{
            return 'Saiwai';
        }
        case mc:{
            return 'MCBooks';
        }
    }
}

function getPercent(num1,num2){
    if(num2 == 0){
        return 0;
    }
    return (num1 / num2 * 100);
}

function getValKDKHBR(mm, year){
    if(mm ==0){
        mm = 12;
        year = year -1;
    }
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
        }
        
    })
}

function getValOTKHBR(mm, year){
    if(mm ==0){
        mm = 12;
        year = year -1;
    }
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
        }
        
    })
}

function getValKDTTBR(mm, year){
    if(mm ==0){
        mm = 12;
        year = year -1;
    }
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
        }
        
    })
}

function getValOTTTBR(mm, year){
    if(mm ==0){
        mm = 12;
        year = year -1;
    }
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
        }
        
    })
}

function getValKDKHTT(mm, year){
    if(mm ==0){
        mm = 12;
        year = year -1;
    }
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
        }
        
    })
}

function getValKDTTTT(mm, year){
    if(mm ==0){
        mm = 12;
        year = year -1;
    }
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
        }
        
    })
}

function getValTeamTTBR(mm,team_id, year){
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
            team_id: team_id,
        }
        
    })
}

function getValTeamKHBR(mm,team_id, year){
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
            team_id: team_id,
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
            type: [2,6]
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
            type: 4
        }
        
    })
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

module.exports = new SiteController;