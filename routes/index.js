const siteRouter = require('./site');
const kdRouter = require('./kd');
const changmiRouter = require('./changmi');
const kaixinRouter = require('./kaixin');
const tkRouter = require('./tkbooks');
const saiwaiRouter = require('./saiwai');
const mcRouter = require('./mcbooks');
const userRouter = require('./users');
const reportRouter = require('./report');


function route(app){
    app.use('/reports',reportRouter);
    app.use('/users',userRouter);
    app.use('/mcbooks',mcRouter);
    app.use('/saiwai',saiwaiRouter);
    app.use('/tkbooks',tkRouter);
    app.use('/kaixin',kaixinRouter);
    app.use('/changmi',changmiRouter);
    app.use('/kinhdoanh',kdRouter);
    app.use('/',siteRouter);
}

module.exports = route;