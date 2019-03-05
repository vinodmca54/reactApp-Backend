// COURSE IN THE HOSPITAL
// INDICATION
// PERIOD
// COMMENT
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hospitalCourseSchema = new Schema({
    patientId: {type: Schema.Types.ObjectId, ref: 'PatientRegistration'},
    courseGiven: {type: String, required: true},
    indication: {type: String, required: true},
    period: {type: String, required: true},
    comment: {type: String, required: true},
}, {versionKey: false})

module.exports = hospitalCourseSchema;