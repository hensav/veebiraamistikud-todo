const mongoose = require('mongoose')
const schema = mongoose.Schema({
    name: String
  },
  {
    timestamps: true
  })

module.exports = mongoose.model('todos', schema)
