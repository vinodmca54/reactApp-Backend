const express = require('express');
var patient = require('./../controller/patientRegistrationCtrl');

var router = express.Router();
router.get('/', async (req, res, next) => {
    try {
        await patient.getRecords(req, res, next);
    } catch (e) {

    }
}).get('/:id', async (req, res, next) => {
    try {
        await patient.getById(req, res, next);
    } catch (e) {

    }
}).post('/', async (req, res, next) => {
    try {
        console.log('====>POST REQUEST===>', req.body);
        await patient.addRecord(req, res, next);
    } catch (e) {

    }
}).put('/:id', async (req, res) => {
    try {
        await patient.updateRecord(req, res);
    } catch (e) {

    }
}).delete('/:id', async (req, res) => {
    try {
        await patient.removeRecord(req, res);
    } catch (e) {

    }
})

module.exports = router;