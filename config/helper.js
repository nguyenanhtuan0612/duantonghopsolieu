const { render } = require("node-sass");

function config_time(time1) { 
    var time = time1.toString();
    var str = time.split(' ');
    var month = toMonth(str[1]);

    return str[2]+'/'+month+'/'+str[3];
}

function toMonth(str){
    switch(str){
        case 'Jan':{
            return '1';
        }
        case 'Feb   ':{
            return '2';
        }
        case 'Mar':{
            return '3';
        }
        case 'Apr':{
            return '4';
        }
        case 'May':{
            return '5';
        }
        case 'Jun':{
            return '6';
        }
        case 'Jul':{
            return '7';
        }
        case 'Aug':{
            return '8';
        }
        case 'Sep':{
            return '9';
        }
        case 'Oct':{
            return '10';
        }
        case 'Nov':{
            return '11';
        }
        case 'Dec':{
            return '12';
        }
        default:{
            return '1';
        }
    }
}

function vndFormat(money){
    if(money < 0){
        money = abs(money);
        var str = money.toString();
        var num = str.split('');
        var mon = '';
        var d = num.length % 3;
        for(i = d - 1; i < num.length - 1; i+=3){
            num[i] = num[i] + '.';
        }
        for(i = 0; i < num.length; i+=1){
            mon = mon + num[i];
        }
        return '-' + mon;
    }
    else{
        var str = money.toString();
        var num = str.split('');
        var mon = '';
        var d = num.length % 3;
        for(i = d - 1; i < num.length - 1; i+=3){
            num[i] = num[i] + '.';
        }
        for(i = 0; i < num.length; i+=1){
            mon = mon + num[i];
        }
        return mon;
    }
}

function setColor(val){
    if(val < 70){
        return 'red';
    }
    if(70<= val && val < 100){
        return 'yellow';
    }
    if(100<= val && val <= 120){
        return 'green';
    }
    if(120 < val){
        return 'aqua';
    }
}

function setColorArrow(val){
    if(val < 0){
        return 'red';
    }
    else{
        return 'green'
    }
}

function setArrow(val){
    if(val < 0){
        return 'down';
    }
    else{
        return 'up'
    }
}

function abs(val){
    return Math.abs(val);
}

module.exports = {
    config_time,
    vndFormat,
    setColor,
    setColorArrow,
    setArrow,
    abs,
}