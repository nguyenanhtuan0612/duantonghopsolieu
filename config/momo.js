const dotenv = require('dotenv');
dotenv.config();

const { MOMO_URL = 'https://test-payment.momo.vn'} = process.env;
const { PARTNER_CODE, ACCESS_KEY, SECRET_KEY, API_ENDPOIMT, AIO_API } = process.env;
module.exports = {
    momoUrl: MOMO_URL,
    partnerCode: PARTNER_CODE,
    accessKey: ACCESS_KEY,
    secretKey: SECRET_KEY,
    apiEnpoint: API_ENDPOIMT,
    aioApi: AIO_API
};