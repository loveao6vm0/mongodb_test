//oringinal
// var express = require('express');
// var router = express.Router();

// router.route('/').get( function(req, res, next) {
//     res.render('index');
// });

// router.route('/person/:id').get( function(req, res, next) {
//     res.render('person', { ID: req.params.id });
// });

// module.exports = router;

var express = require('express'),
    index = require('../controllers/index')
    create = require('../controllers/create'),
    read = require('../controllers/read'),
    readall = require('../controllers/readall'),
    update = require('../controllers/update'),
    del = require('../controllers/del'),
    router = express.Router();

router.route('/').get(index);
router.route('/person')
    .post(create)
    .get(readall);
//代表前端對於新增(POST)或讀取全部(readall)的要求
router.route('/person/:name')
    .post(read)
    .put(update)
    .delete(del);

module.exports = router;