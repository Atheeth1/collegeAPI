const mongoose = require("mongoose");

const GovernamentSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  stateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "State",
  },
  college_typeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College_Type",
  },
});

module.exports = mongoose.model("Governament", GovernamentSchema);
