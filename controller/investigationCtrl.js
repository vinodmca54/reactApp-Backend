var investigationModel = require('./../schema').PatientInvestigation;


var investigation = {};

investigation.addRecord = async (req, res) => {
    try {
        console.log('======>Investigation addrecord', req.body)
        if (req.body._id) {
            await investigation.updateRecord(req, res);
        }
        var response = await investigationModel.create(req.body);
        res.json(response);
    } catch (e) {
        throw e;
    }
}
investigation.getRecords = async (req, res) => {
    try {
        var response = await investigationModel.find({});
        res.send(response);
    } catch (e) {
        throw e;
    }
}
investigation.getById = async (req, res) => {
    const id = req.params.id;
    var query = {_id: id};
    try {
        var response = await investigationModel.findById(query);
        res.send(response);
    } catch (e) {
        throw e;
    }
}
investigation.getByPatientId = async (req, res) => {
    const id = req.params.id;
    console.log('======>Investigation addrecord')
    try {
        var response = await investigationModel.findOne({patientId: id});
        res.send(response);
    } catch (e) {
        throw e;
    }
}

investigation.updateRecord = async (req, res) => {
    const query = {_id: req.body._id};
    const update = {
        investigation: req.body.investigation,
    }
    const options = {new: true};//returns old document if set to false
    try {
        var response = await investigationModel.findOneAndUpdate(query,
            update, options
        )
        res.send(response);
    } catch (e) {
        throw e;
    }
}

investigation.removeRecord = async (req, res) => {
    const id = req.params.id;
    try {
        var response = await investigationModel.remove({_id: id})
        res.send(response);
    } catch (e) {
        throw e;
    }
}
module.exports = investigation;