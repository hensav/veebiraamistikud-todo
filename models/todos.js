const mongoose = require('mongoose')
const schema = mongoose.Schema({
    name: String,
    description: String,
    done: { type: Boolean, default: false }
    },
  {
    timestamps: true
  })

module.exports = mongoose.model('todos', schema)
