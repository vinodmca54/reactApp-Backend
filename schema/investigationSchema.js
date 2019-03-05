// INVESTIGATIONS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const investigationSchema = new Schema({
    patientId: {type: Schema.Types.ObjectId, ref: 'PatientRegistration'},
    investigation: {type: String, required: true},
}, {versionKey: false})

module.exports = investigationSchema;