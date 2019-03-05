const express = require('express');
const discharge = require('./../controller/dischargeAdviceCtrl');

var router = express.Router();
router.get('/', async (req, res, next) => {
    try {
        await discharge.getRecords(req, res, next);
    } catch (e) {

    }
}).get('/:id', async (req, res, next) => {
    try {
        await discharge.getById(req, res, next);
    } catch (e) {

    }
}).post('/', async (req, res, next) => {
    try {
        await discharge.addRecord(req, res, next);
    } catch (e) {

    }
}).put('/:id', async (req, res) => {
    try {
        await discharge.updateRecord(req, res);
    } catch (e) {

    }
}).delete('/:id', async (req, res) => {
    try {
        await discharge.removeRecord(req, res);
    } catch (e) {

    }
})

module.exports = router;