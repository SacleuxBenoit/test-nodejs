const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const router = express()

router.use(logger('dev'));

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : false}));

router.get('*', (req,res ) => res.status(200).send({
    message : 'Welcome',
}));

module.exports = router;