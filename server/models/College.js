const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema({
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
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
});

module.exports = mongoose.model("College", CollegeSchema);
