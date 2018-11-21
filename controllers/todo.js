const Todos = require('../models/todos')
const { isValid } = require('mongoose').Types.ObjectId

exports.list = async (req, res) => {
  res.status(201).send(await Todos.find({}))
}

exports.addTodo = async (req, res) => {
  const { name, description } = req.body

  const newTodo = await new Todos({
    name,
    description
  }).save()

  if (!newTodo) throw new Error('Not created')
  return res.status(201).send({ message: 'New todo created', data: newTodo})
}

exports.removeTodo = async (req, res) => {

  const { id } = req.query

  if (!isValid(id)) res.status(200).send(400, {message: 'invalid id'})
  const removeTodo = await Todos.findByIdAndRemove(id)

  res.status(200).send({message: "Todo removed", data: removeTodo})
}

exports.editTodo = async (req, res) => {
  const { id, name, description } = req.body

  if (!isValid(id)) {
    const error = new Error('invalid id')
    error.status = 400
    throw error
  }

  const update = { $set: req.body }
  const result = await Todos.findByIdAndUpdate(id, update)

  res.status(200).send({message: `Todo with id ${id} updated`, data: result})

}
