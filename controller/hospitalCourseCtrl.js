var courseModel = require('./../schema').PatientCourse;


var course = {};

course.addRecord = async (req, res) => {
    try {
        var response = await courseModel.create(req.body);
        res.json(response);
    } catch (e) {
        throw e;
    }
}
course.getRecords = async (req, res) => {
    try {
        var response = await courseModel.find({});
        res.send(response);
    } catch (e) {
        throw e;
    }
}
course.getById = async (req, res) => {
    const id = req.params.id;
    var query = {_id: id};
    try {
        var response = await courseModel.findById(query);
        res.send(response);
    } catch (e) {
        throw e;
    }
}

course.updateRecord = async (req, res) => {
    const id = req.params.id;
    try {
        var response = await courseModel.update({_id: id}, {
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

course.removeRecord = async (req, res) => {
    const id = req.params.id;
    try {
        var response = await courseModel.remove({_id: id})
        res.send(response);
    } catch (e) {
        throw e;
    }
}
module.exports = course;