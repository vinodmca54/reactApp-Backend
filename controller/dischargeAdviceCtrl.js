var dischargeModel = require('./../schema').PatientDischarge;


var discharge = {};

discharge.addRecord = async (req, res) => {
    try {
        var response = await dischargeModel.create(req.body);
        res.json(response);
    } catch (e) {
        throw e;
    }
}
discharge.getRecords = async (req, res) => {
    try {
        var response = await dischargeModel.find({});
        res.send(response);
    } catch (e) {
        throw e;
    }
}
discharge.getById = async (req, res) => {
    const id = req.params.id;
    var query = {_id: id};
    try {
        var response = await dischargeModel.findById(query);
        res.send(response);
    } catch (e) {
        throw e;
    }
}

discharge.updateRecord = async (req, res) => {
    const id = req.params.id;
    try {
        var response = await dischargeModel.update({_id: id}, {
            $set: {
                name: contact.name,
                email: contact.email,
                mobile: contact.mobile
            }
        })
        res.send(response);
    } catch (e) {
        throw e;
    }

}

discharge.removeRecord = async (req, res) => {
    const id = req.params.id;
    try {
        var response = await dischargeModel.remove({_id: id})
        res.send(response);
    } catch (e) {
        throw e;
    }
}
module.exports = discharge;