const XLSX = require('xlsx');
const { User, Team, Report, RpDetail } = require('../../sequelize');

function readFile(file){
    var workbook = XLSX.readFile(file);
    var first_sheet_name = workbook.SheetNames[0];
    var address_of_cell = 'A1';
 
    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];
 
    /* Find desired cell */
    var desired_cell = worksheet['A1'];
 
    /* Get the value */
    var desired_value = (desired_cell ? desired_cell.v : undefined);
    console.log(desired_value);
}  

function getValue(file, cell){
    var workbook = XLSX.readFile(file);
    var worksheet = workbook.Sheets[workbook.SheetNames[0]];

    var desired_cell = worksheet[cell];
    var desired_value = (desired_cell ? desired_cell.v : undefined);
    return desired_value;
}
 
function getKeHoachBanraTeamKDVal(file, rp_id, team_id){

    var mb_tt = getValue(file, 'B4');
    var mb_onl = getValue(file, 'B5');
    var mb_shopee = getValue(file, 'B6');
    var mb_blkd = getValue(file, 'B7');
    var mb_duan = getValue(file, 'B8');
    var mb_banle = getValue(file, 'B9');
    var bizbooks_tt = getValue(file, 'B10');
    var mn_tt = getValue(file, 'B12');
    var mn_tiki = getValue(file, 'B13');
    var mn_duan = getValue(file, 'B14');

    try{
        RpDetail.create(
            {
                rp_id: rp_id, 
                team_id: team_id,
                type: 1, 
                mb_tt: mb_tt, 
                mb_onl: mb_onl , 
                mb_shopee: mb_shopee,
                mb_blkd: mb_blkd,
                mb_duan: mb_duan,
                mb_banle: mb_banle,
                mn_tt: mn_tt,
                mn_tiki: mn_tiki,
                mn_duan: mn_duan,
                bizbooks_tt: bizbooks_tt,
            }
        )
    }catch(err){
        alert(err);
    }
}

function getThucTeBanraTeamKDVal(file, rp_id, team_id){

    var mb_tt = getValue(file, 'C4');
    var mb_onl = getValue(file, 'C5');
    var mb_shopee = getValue(file, 'C6');
    var mb_blkd = getValue(file, 'C7');
    var mb_duan = getValue(file, 'C8');
    var mb_banle = getValue(file, 'C9');
    var bizbooks_tt = getValue(file, 'C10');
    var mn_tt = getValue(file, 'C12');
    var mn_tiki = getValue(file, 'C13');
    var mn_duan = getValue(file, 'C14');
   
    try{
        RpDetail.create(
            {
                rp_id: rp_id, 
                type: 2, 
                team_id: team_id,
                mb_tt: mb_tt, 
                mb_onl: mb_onl , 
                mb_shopee: mb_shopee,
                mb_blkd: mb_blkd,
                mb_duan: mb_duan,
                mb_banle: mb_banle,
                mn_tt: mn_tt,
                mn_tiki: mn_tiki,
                mn_duan: mn_duan,
                bizbooks_tt: bizbooks_tt,
            }
        )
    }catch(err){
        alert(err);
    }
}

function getKeHoachThuTienTeamKDVal(file, rp_id, team_id){

    var mb_tt = getValue(file, 'B19');
    var mb_onl = getValue(file, 'B20');
    var mb_shopee = getValue(file, 'B21');
    var mb_blkd = getValue(file, 'B22');
    var mb_duan = getValue(file, 'B23');
    var mb_banle = getValue(file, 'B24');
    var bizbooks_tt = getValue(file, 'B25');
    var mn_tt = getValue(file, 'B27');
    var mn_tiki = getValue(file, 'B28');
    var mn_duan = getValue(file, 'B29');
    
    try{
        RpDetail.create(
            {
                rp_id: rp_id,
                team_id: team_id, 
                type: 3, 
                mb_tt: mb_tt, 
                mb_onl: mb_onl , 
                mb_shopee: mb_shopee,
                mb_blkd: mb_blkd,
                mb_duan: mb_duan,
                mb_banle: mb_banle,
                mn_tt: mn_tt,
                mn_tiki: mn_tiki,
                mn_duan: mn_duan,
                bizbooks_tt: bizbooks_tt,
            }
        )
    }catch(err){
        alert(err);
    }
}

function getThucTeThuTienTeamKDVal(file, rp_id, team_id){

    var mb_tt = getValue(file, 'C19');
    var mb_onl = getValue(file, 'C20');
    var mb_shopee = getValue(file, 'C21');
    var mb_blkd = getValue(file, 'C22');
    var mb_duan = getValue(file, 'C23');
    var mb_banle = getValue(file, 'C24');
    var bizbooks_tt = getValue(file, 'C25');
    var mn_tt = getValue(file, 'C27');
    var mn_tiki = getValue(file, 'C28');
    var mn_duan = getValue(file, 'C29');
    
    try{
        RpDetail.create(
            {
                rp_id: rp_id, 
                team_id: team_id,
                type: 4, 
                mb_tt: mb_tt, 
                mb_onl: mb_onl , 
                mb_shopee: mb_shopee,
                mb_blkd: mb_blkd,
                mb_duan: mb_duan,
                mb_banle: mb_banle,
                mn_tt: mn_tt,
                mn_tiki: mn_tiki,
                mn_duan: mn_duan,
                bizbooks_tt: bizbooks_tt,
            }
        )
    }catch(err){
        alert(err);
    }
}

function getKeHoachBanRaCacTeamVal(file, rp_id, team_id){ 
    try{
        RpDetail.create(
            {
                rp_id: rp_id, 
                team_id: team_id,
                type: 5, 
                mb_tt: getValue(file, 'B4'), 
                mb_onl: getValue(file, 'B5'), 
                mb_shopee: getValue(file, 'B6'),
                mb_duan: getValue(file, 'B7'),
                mn_tt: getValue(file, 'B9'),
                mn_tiki: getValue(file, 'B10'),
                mn_duan: getValue(file, 'B11'),
                bl_bm: getValue(file, 'B13'),
                bl_cn: getValue(file, 'B14'),
                mkt: getValue(file, 'B19'),
                mkt_bm: getValue(file, 'B20'),
            }
        )
    }catch(err){
        console.log(err.message);
    }
}

function getThucTeBanRaCacTeamVal(file, rp_id, team_id){ 
    RpDetail.create(
        {
            rp_id: rp_id,
            team_id: team_id,
            type: 6, 
            mb_tt: getValue(file, 'C4'), 
            mb_onl: getValue(file, 'C5'), 
            mb_shopee: getValue(file, 'C6'),
            mb_duan: getValue(file, 'C7'),
            mn_tt: getValue(file, 'C9'),
            mn_tiki: getValue(file, 'C10'),
            mn_duan: getValue(file, 'C11'),
            bl_bm: getValue(file, 'C13'),
            bl_cn: getValue(file, 'C14'),
            mkt: getValue(file, 'C19'),
            mkt_bm: getValue(file, 'C20'),
        }
    )
}


module.exports = {
    readFile,
    getKeHoachBanraTeamKDVal,
    getThucTeBanraTeamKDVal,
    getThucTeThuTienTeamKDVal,
    getKeHoachThuTienTeamKDVal,
    getKeHoachBanRaCacTeamVal,
    getThucTeBanRaCacTeamVal,
}