const mongoose = require('mongoose');
var registrationSchema = require('./patientRegistrationSchema')
var historySchema = require('./historyFindingSchema')
var dischargeSchema = require('./dischargeAdviceSchema')
var investigationSchema = require('./investigationSchema')
var courseSchema = require('./hospitalCourseSchema');

module.exports.PatientRegistration = mongoose.model('registration', registrationSchema, 'registration');
module.exports.PatientHistory = mongoose.model('history', historySchema, 'history');
module.exports.PatientDischarge = mongoose.model('discharge', dischargeSchema, 'discharge');
module.exports.PatientInvestigation = mongoose.model('investigation', investigationSchema, 'investigation');
module.exports.PatientCourse = mongoose.model('course', courseSchema, 'course');

