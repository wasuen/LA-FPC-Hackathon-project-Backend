const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  indicator: String,
  baseline:  { year: String, metric: String },
  update:  [{ year: String, metric: String }],
  sources: String,
  change: String,
  notes: String,
  dataStatus: String,
})

const Data = mongoose.model('Data', authSchema)

module.exports = Data;