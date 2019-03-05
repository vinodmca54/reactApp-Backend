// DIAGNOSIS
// HISTORY
// FINDINGS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const historyFindingSchema = new Schema({
    patientId: {type: Schema.Types.ObjectId, ref: 'PatientRegistration'},
    diagnosis: {type: String, required: true},
    history: {type: String, required: true},
    findings: {type: String, required: true}
}, {versionKey: false})

module.exports = historyFindingSchema;