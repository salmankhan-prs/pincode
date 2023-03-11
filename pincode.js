const mongoose = require("mongoose");

const pincodeModel = mongoose.Schema({
  officename: String,
  pincode: { type: String, index: true },
  officeType: String,
  Deliverystatus: String,
  divisionname: String,
  regionname: String,
  circlename: String,
  Taluk: String,
  Districtname: String,
  statename: String,
});

module.exports = mongoose.model("pincode", pincodeModel);
