const mongoose = require("mongoose");

const College_TypeSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Governament", "Aided", "Private"],
  },
  stateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "State",
  },
});

module.exports = mongoose.model("College_Type", College_TypeSchema);
