var registrationModel = require("./../schema").PatientRegistration;

var patient = {};

patient.addRecord = async (req, res) => {
  try {
    console.log("====>Adding===>");
    var response = await registrationModel.create(req.body);
    console.log("Added successfully===>", response);
    res.json({ success: true, data: response });
  } catch (e) {
    throw e;
  }
};
patient.getRecords = async (req, res) => {
  console.log("vinod testing", req.query);
  try {
    var response = await registrationModel.find({});
    if (req.query.fromDate && req.query.toDate) {
      console.log("condition true");
      const filteredResponse = response.filter(
        () =>
          new Date(req.query.fromDate).getTime() >=
            new Date(response.admissionDate).getTime() &&
          new Date(req.query.toDate).getTime() <=
            new Date(response.admissionDate).getTime()
      );
      console.log("responce", response);
      console.log(filteredResponse);
      res.send(filteredResponse);
    } else {
      res.send(response);
    }
  } catch (e) {
    console.log("error block");
    throw e;
  }
};
patient.getById = async (req, res) => {
  const id = req.params.id;
  var query = { _id: id };
  try {
    var response = await registrationModel.findById(query);
    res.send(response);
  } catch (e) {
    throw e;
  }
};

patient.updateRecord = async (req, res) => {
  const id = req.params.id;
  try {
    var response = await registrationModel.update(
      { _id: id },
      {
        $set: {
          name: contact.name,
          email: contact.email,
          mobile: contact.mobile
        }
      }
    );
    res.send(response);
  } catch (e) {
    throw e;
  }
};

patient.removeRecord = async (req, res) => {
  const id = req.params.id;
  try {
    var response = await registrationModel.remove({ _id: id });
    res.send(response);
  } catch (e) {
    throw e;
  }
};
module.exports = patient;
