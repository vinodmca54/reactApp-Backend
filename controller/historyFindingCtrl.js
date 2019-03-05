var historyModel = require('./../schema').PatientHistory;
var patientModel = require('./../schema').PatientRegistration


var history = {};

history.addRecord = async (req, res) => {
    try {
        if (req.body._id) {
            await history.updateRecord(req, res);
        }
        else {
            var response = await historyModel.create(req.body);
            res.json(response);
        }
    } catch (e) {
        throw e;
    }
}
history.getRecords = async (req, res) => {
    try {
        var response = await historyModel.find({});
        res.send(response);
    } catch (e) {
        throw e;
    }
}
history.getById = async (req, res) => {
    const id = req.params.id;
    var query = {_id: id};
    try {
        var response = await historyModel.findById(query);
        res.send(response);
    } catch (e) {
        throw e;
    }
}

history.updateRecord = async (req, res) => {
    const query = {_id: req.body._id};
    const update = {
        diagnosis: req.body.diagnosis,
        history: req.body.history,
        findings: req.body.findings,
    }
    const options = {new: true};//returns old document if set to false
    try {
        var response = await historyModel.findOneAndUpdate(query,
            update, options
        )
        res.send(response);
    } catch (e) {
        throw e;
    }

}
history.getByPatientId = async (req, res) => {
    const id = req.params.id;
    try {
        var response = await historyModel.findOne({patientId: id});
        res.send(response);
    } catch (e) {
        throw e;
    }
}

history.removeRecord = async (req, res) => {
    const id = req.params.id;
    try {
        var response = await historyModel.remove({_id: id})
        res.send(response);
    } catch (e) {
        throw e;
    }
}
module.exports = history;