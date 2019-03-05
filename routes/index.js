var express = require('express')
var router = express.Router();

router.use('/registration', require('./patientRegRoute'));
router.use('/investigation', require('./investigationRoute'));
router.use('/course', require('./hospitalCourseRoute'));
router.use('/history', require('./historyFindingRoute'));
router.use('/discharge', require('./dischargeAdviceRoute'));

module.exports = router;