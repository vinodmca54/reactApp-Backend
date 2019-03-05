// ADVICE ON DISCHARGE
// DISCHARGE SUMMARY PREPARED AND VERIFIED BY
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dischargeAdviceSchema = new Schema({
    patientId: {type: Schema.Types.ObjectId, ref: 'PatientRegistration'},
    advice: {type: String, required: true},
    summary: {type: String, required: true},
}, {versionKey: false})

module.exports = dischargeAdviceSchema;