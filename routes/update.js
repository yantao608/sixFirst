var express = require('express');
var router = express.Router();

var localAppVersion = '1.0';
/* GET home page. */
router.post('/', function(req, res, next) {
    var responseData = {};
    var appVersion =  req.body.appVersion;
    if (appVersion < localAppVersion) {
      responseData['retCode'] = 200;
      responseData['recDesc'] = 'this app has new Version, Please update';
      responseData['isForce'] = false;
    }else {
      responseData['retCode'] = 201;
      responseData['recDesc'] = 'no update';
    }
    res.json(responseData);
});

module.exports = router;
