const express = require('express');
const course = require('./../controller/hospitalCourseCtrl');

var router = express.Router();
router.get('/', async (req, res, next) => {
    try {
        await course.getRecords(req, res, next);
    } catch (e) {

    }
}).get('/:id', async (req, res, next) => {
    try {
        await course.getById(req, res, next);
    } catch (e) {

    }
}).post('/', async (req, res, next) => {
    try {
        await course.addRecord(req, res, next);
    } catch (e) {

    }
}).put('/:id', async (req, res) => {
    try {
        await course.updateRecord(req, res);
    } catch (e) {

    }
}).delete('/:id', async (req, res) => {
    try {
        await course.removeRecord(req, res);
    } catch (e) {

    }
})

module.exports = router;