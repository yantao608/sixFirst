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
	responseData['shareMessage'] = 'Download to explore more free sexy girls&videos http://159.89.153.48/originalData/Webmate.apk';
        responseData['recDesc'] = 'success';
        responseData['mainList'] = mainList['list'];
        responseData['changedMainList'] = changedMainList['list'];
    }

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
