const express = require('express');
const history = require('./../controller/historyFindingCtrl');

var router = express.Router();
router.get('/', async (req, res, next) => {
    try {
        await history.getRecords(req, res, next);
    } catch (e) {

    }
}).get('/:id', async (req, res, next) => {
    try {
        await history.getById(req, res, next);
    } catch (e) {

    }
}).post('/', async (req, res, next) => {
    try {
        await history.addRecord(req, res, next);
    } catch (e) {

    }
}).put('/:id', async (req, res) => {
    try {
        await history.updateRecord(req, res);
    } catch (e) {

    }
}).delete('/:id', async (req, res) => {
    try {
        await history.removeRecord(req, res);
    } catch (e) {

    }
}).get('/getByPatientId/:id', async (req, res) => {
    try {
        await history.getByPatientId(req, res);
    } catch (e) {

    }
})

module.exports = router;