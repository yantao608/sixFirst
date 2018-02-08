var express = require('express');
var router  = express.Router();
var fs      = require('fs');

/* GET home page. */

var mainList, changedMainList;

router.get('/', function(req, res) {

    if (!mainList || changedMainList){
        mainList = getReadFileData('mainList.json');
        changedMainList = getReadFileData('changedMainList.json');
    }

    var responseData = {};
    if (mainList === 'errorData' || changedMainList === 'errorData'){
        responseData['retCode'] = 201;
        responseData['recDesc'] = 'error data';
    }else{
        responseData['retCode'] = 200;
        responseData['recDesc'] = 'success';
        responseData['mainList'] = mainList['list'];
        responseData['changedMainList'] = changedMainList['list'];
    }

    console.log(responseData);
    res.json(responseData);
});

function getReadFileData(fileName) {
    var data = fs.readFileSync(__dirname + '/../data/'+fileName);
    if(data){
        return JSON.parse(data);
    }else {
        return 'errorData';
    }
}

module.exports = router;