const mongoose = require('mongoose');
const stageSchema = new mongoose.Schema(
  {
    stageName: { type: String },
    stageId: {
      type: mongoose.Schema.Types.ObjectId,
      index: true,
      required: true,
      auto: true
    },
    stageDetails: [{
      subStgName: { type: String }
    }]

  });

const stagesModel = mongoose.model('stages', stageSchema);
module.exports = stagesModel;

