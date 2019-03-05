//
// IP NO
// PATIENT NAME
// ADDRESS
// UNIT CHEIF
// UNIT STAFF
// MR.NO
// PAT. ID
// SEX
// WEIGHT
// TEL NO
// IP_TYPE
// STAFF
// DUES IF ANY
// RELIGION
// OCCUPATION
// DATE OF ADMISSION
// DATE OF DISCHARGE
// CASH/CR.BILL
// BLOOD BROUP
// BED NUMBER
// TIME OF ARRIVAL

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patientRegistrationSchema = new Schema({
    // _id: new mongoose.Types.ObjectId(),
    name: {type: String, required: true},
    address: {type: String, required: true},
    gender: {type: String, required: true},
    contactNumber: {type: String, required: true},
    weight: String,
    ipType: {type: String, required: true},
    staff: {type: String, required: true},
    unitStaff: {type: String, required: true},
    unitChief: {type: String, required: true},
    mrNumber: Number,
    ipNumber: Number,
    paymentType: String,
    dues: Number,
    religion: String,
    occupation: String,
    admissionDate: {type: Date, default: Date.now},
    dischargeDate: {type: Date, default: Date.now},
    bloodGroup: String,
    bedNumber: Number,
    arrivalTime: String,
    investigation: [{type: Schema.Types.ObjectId, ref: 'Investigation'}],
    historyFinding: [{type: Schema.Types.ObjectId, ref: 'HistoryFinding'}],
    hospitalCourse: [{type: Schema.Types.ObjectId, ref: 'HospitalCourse'}],
    dischageAdvice: [{type: Schema.Types.ObjectId, ref: 'DischargeAdvice'}],
}, {versionKey: false})

module.exports = patientRegistrationSchema;
