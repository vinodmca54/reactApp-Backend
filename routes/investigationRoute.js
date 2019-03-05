const express = require('express');
const investigations = require('./../controller/investigationCtrl');

var router = express.Router();
router.get('/', async (req, res, next) => {
    try {
        await investigations.getRecords(req, res, next);
    } catch (e) {

    }
}).get('/:id', async (req, res, next) => {
    try {
        await investigations.getById(req, res, next);
    } catch (e) {

    }
}).post('/', async (req, res, next) => {
    try {
        await investigations.addRecord(req, res, next);
    } catch (e) {

    }
}).put('/:id', async (req, res) => {
    try {
        await investigations.updateRecord(req, res);
    } catch (e) {

    }
}).delete('/:id', async (req, res) => {
    try {
        await investigations.removeRecord(req, res);
    } catch (e) {

    }
}).get('/getByPatientId/:id', async (req, res) => {
    try {
        await investigations.getByPatientId(req, res);
    } catch (e) {

    }
})

module.exports = router;