const mongoose = require('mongoose')
const schema = mongoose.Schema({
    name: String,
    mistakes: Number,
    duration: Number,
    feedback: Boolean

  },
  {
    timestamps: true
  })

module.exports = mongoose.model('exercise', schema)
