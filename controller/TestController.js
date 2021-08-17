var request = require('sync-request');
var token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJPZ21xQ0JMUVhJcjBrWlIwMHdwQmZTZHViRFZIaEFyMEw4RFVUQTlpdE9rIn0.eyJqdGkiOiI5YTBhYzdkYy1jNzEzLTQ5YzYtYjliNS02NTMzYTJiM2NhMGUiLCJleHAiOjE2MjMxMzc5NzYsIm5iZiI6MCwiaWF0IjoxNjIzMTM3Njc2LCJpc3MiOiJodHRwOi8vMTkyLjE2OC4zLjEyOjMxODkzL2F1dGgvcmVhbG1zL01DQk9PSyIsImF1ZCI6IndlYnNpdGUiLCJzdWIiOiIyNWNjYTdjYi02ODM3LTRiZjktOTQ1NC1lZmE1MmNiNzg0NjUiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJ3ZWJzaXRlIiwibm9uY2UiOiJmZDJlMDEzOS01OWEwLTQzMzgtYjU4Yi05MTg1ZGE1YjE5NGQiLCJhdXRoX3RpbWUiOjE2MjMxMzc2NzQsInNlc3Npb25fc3RhdGUiOiJjYjZlMTcxNS00ZmMwLTQzZjAtYjA5Mi00MjMwMjhkNDc4NmYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsidXNlcl9kZWxldGUiLCJkaXNjb3VudF9jcmVhdGUiLCJmaWxlX3ZpZXciLCJmaWxlX2RlbGV0ZSIsInVzZXJfdXBkYXRlIiwicGFydGl0aW9uX2NyZWF0ZSIsInBvc3RfdmlldyIsImV4YW1fZGVsZXRlIiwiZmlsZV91cGRhdGUiLCJnaWZ0UHJvbW90aW9uX2NyZWF0ZSIsImdpZnRTdG9yZV91cGRhdGUiLCJib29rX3ZpZXciLCJleGFtX3VwZGF0ZSIsImFjY2Vzc19jb3Vyc2UiLCJ0eXBlUXVlc3Rpb25zX3ZpZXciLCJjb3Vwb25fdmlldyIsImJvb2tfY3JlYXRlIiwicXVlc3Rpb25fdXBkYXRlIiwiY29tYm9Db3Vyc2VfdXBkYXRlIiwiZ2lmdFBhY2thZ2VfdmlldyIsInVtYV9hdXRob3JpemF0aW9uIiwiY291cnNlX3VwZGF0ZSIsInJldmVudWVfdmlldyIsInRlYWNoZXJfYWN0aW9uIiwidXNlcl92aWV3IiwiY2F0ZWdvcnlfdXBkYXRlIiwicG9zdF9kZWxldGUiLCJjb21taXNzaW9uX3ZpZXciLCJjb3Vwb25fY3JlYXRlIiwiYWNjZXNzX2dlbmVyYWwiLCJ0ZWFjaGVyX3ZpZXciLCJjYXRlZ29yeV9jcmVhdGUiLCJjb21ib0NvdXJzZV9kZWxldGUiLCJyb2xlX2RlbGV0ZSIsInBhcnRpdGlvbl91cGRhdGUiLCJjb3Vwb25fdXBkYXRlIiwibm90aWZpY2F0aW9uX3ZpZXciLCJnaWZ0UHJvbW90aW9uX3ZpZXciLCJwYXJ0aXRpb25fdmlldyIsInN0b3JlX2NvdXBvbl92aWV3IiwicGFnZV9jcmVhdGUiLCJnaWZ0U3RvcmVfdmlldyIsInRyYW5zYWN0aW9uX3ZpZXciLCJib29rX3VwZGF0ZSIsImRpc2NvdW50X2FjdGl2ZSIsImNvdXJzZV92aWV3IiwiYm9va19kZWxldGUiLCJyb2xlX3ZpZXciLCJwYWdlX3VwZGF0ZSIsInF1ZXN0aW9uX3ZpZXciLCJnaWZ0U3RvcmVfY3JlYXRlIiwiZ2lmdFBhY2thZ2VfY3JlYXRlIiwicXVlc3Rpb25fY3JlYXRlIiwicGFnZV9kZWxldGUiLCJnaWZ0UHJvbW90aW9uX3VwZGF0ZSIsImRpc2NvdW50X3VwZGF0ZSIsInBvc3RfdXBkYXRlIiwiZmlsZV9jcmVhdGUiLCJleGFtX2NyZWF0ZSIsImNvdXBvbl9hY3RpdmUiLCJyb2xlX2NyZWF0ZSIsIm9yZGVyX3ZpZXciLCJnaWZ0Y29kZV9zdG9yZV92aWV3Iiwib3JkZXJfYWN0aXZlIiwicm9sZV91cGRhdGUiLCJhY2Nlc3NfYWRtaW4iLCJ1c2VyX2NyZWF0ZSIsImNhdGVnb3J5X3ZpZXciLCJjb3Vyc2VfY3JlYXRlIiwibm90aWZpY2F0aW9uX2NyZWF0ZSIsImRpc2NvdW50X3ZpZXciLCJnaWZ0UGFja2FnZV91cGRhdGUiLCJwb3N0X2NyZWF0ZSIsImNvbWJvQ291cnNlX2NyZWF0ZSIsImNvbWJvQ291cnNlX3ZpZXciLCJwYWdlX3ZpZXciLCJleGFtX3ZpZXciLCJjYXRlZ29yeV9kZWxldGUiLCJnaWZ0c19jb2RlX3ZpZXciXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJuYW1lIjoiTmd1eWVuIEFuaCBUdWFuIiwicHJlZmVycmVkX3VzZXJuYW1lIjoidHVhbmFuaHZkMTk5OEBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiTmd1eWVuIEFuaCBUdWFuIiwiZW1haWwiOiJ0dWFuYW5odmQxOTk4QGdtYWlsLmNvbSJ9.Lkvk6vyfPm5q60A90hR9iYVnpwd-G0t9-r0lKTrB8Np4EGUsIF6YY2ar5Eva2sMdDi5r6BSi2as2aawf7yABS9PmHxMZg0GtvMvQQNjFQZFBmEqxS8Q9KN1EX20z1Vk_xq8htxM1w5neEfHa80vzEZX1GtQTVZ98H2ymH7skkxvP_A4whfjCWEohh5CCeedGJS6duYHA6I2aCOLlxlkUXPHWlO431b5upPmXcoNswrS7ypnbsIBhlhFAYBqfwRM3p7BzJXhkjyEoHGmkN_oHVzGoEfDyiuzcsdhu01QwuafCjJF6eqlpxE2EbSfBRLNAcmJpkL2AmVo7eRDyvnRvTw'

class TestController {
    
    test(req,res){
        res.render('test');
    }

    async testStatus(req,res){
        var logdata = {
            "CODAmount": 200000,
            "CODTransferDate": null,
            "ClientOrderCode": req.body.id,
            "ConvertedWeight": 200,
            "Description": "Tạo đơn hàng",
            "Fee": {
            "Coupon": 0,
            "Insurance": 11000,
            "MainService": 29700,
            "R2S": 0,
            "Return": 0,
            "StationDO": 0,
            "StationPU": 0
            },
            "Height": 15,
            "Length": 15,
            "OrderCode": req.body.ghn,
            "Reason": "",
            "ReasonCode": "",
            "ShipperName": "",
            "ShipperPhone": "",
            "Status": req.body.sel_status,
            "Time":"2020-06-08T02:19:54.908Z",
            "TotalFee":40700,
            "Type":"create",
            "Warehouse":"Kho giao nhận Tân Bình - Hồ Chí Minh",
            "Weight":200,
            "Width":15
        }
        var data = await calAPI('http://192.168.2.217:8002/GHN/updateShipment?hash=Yml6Ym9va3N0b2tlbm1hZGVieW5ndXllbmFuaHR1YW4','POST',logdata);
        res.redirect('/test',);
    }

    testMomo(req,res){
        res.render('testMomo');
    }
    
    // Khi tren FE bam nut thanh toan voi momo se call den function nay
    async testMomoApi(req,res){
        try{
            var url = 'http://localhost:3002/kong/orders/api/v1/orders/momo-payment/' + req.body.id;
            var logdata = {
                notifyUrl: 'http://localhost:3002/kong/orders/api/v1/orders/momo-notify-url/' + req.body.id,
                returnUrl: 'http://localhost:4321/test/returnUrl/' + req.body.id,
                orderInfo: 'Test thanh toán Momo',
                rePay: false,
            }
            /* call qua sercer de call qua API cua Momo khi call api nay thi don hang se chuyen quy method = momo
            va status =pending */
            var rs = await calAPI(url,'POST',logdata, token);
            var { data } = rs; 

            /* khi co dc respone se phan tich errorCode = 0 thi k co loi gi se chuyen qua trang qr 
            cua momo, neu co loi  thì return loi */
            if(data.errorCode == 0 ){
                return res.redirect(data.payUrl);
            } else {
                return res.json(rs); 
            }
            
        } catch(error){
            res.json(error)
        }
    }

    //cái này xoá đi cũng dc cái này em viểt rồi
    // notifyUrl(req,res){
    //     const data = {
    //         headers: req.headers,
    //         body: req.body
    //     }
    //     console.log(data)
    //     return res.json(data);
    // }

    // GET /test/returnUrl/{{ORDER_ID}}
    /* khi trang qr code redirect ve route nay se co gui kem theo du lieu o req.query */
    async returnUrl(req,res){
        const rq = req.query
        const data = {
            status: 'paid',
            momo: rq
        }
        // đoạn này hiển thị thôi k cần call nữa nhé
        // if(rq.errorCode == 0){
        //     var url = 'http://localhost:3002/kong/orders/api/v1/orders/new/' + req.params.id;
        //     var rs = await calAPI(url,'PUT',data, token);
        // } else {
        //     var url = 'http://localhost:3002/kong/orders/api/v1/orders/momo-payment/' + req.params.id;
        //     var rs = await calAPI(url,'PUT',data, token);
        // }

        return res.render('ok',{
            message: rq.message
        });
    }
}

async function calAPI(url, method , jsonData = null, token = null, shopid = null) {
    var res = request(method, url, {
      headers: {
        "Authorization": token,
        "Token": token,
        "ShopId": shopid,
      },
      json: jsonData

    });
    //console.log(res.getBody());
    return JSON.parse(res.getBody('utf8'));s
}

module.exports = new TestController;