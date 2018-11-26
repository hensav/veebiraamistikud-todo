const Todos = require('../models/todos')
const { isValid } = require('mongoose').Types.ObjectId

exports.list = async (req, res) => {
  res.status(201).send(await Todos.find({}))
}

exports.addTodo = async (req, res) => {
  const { name } = req.body
  console.log(name)

  const newTodo = await new Todos({
    name
  }).save()

  if (!newTodo) throw new Error('Not created')
  return res.status(201).send({ message: 'New todo created', data: newTodo})
}

exports.removeTodo = async (req, res) => {

  const { id } = req.body

  if (!isValid(id)) res.status(200).send(400, {message: 'invalid id'})
  const removeTodo = await Todos.findByIdAndRemove(id)

  res.status(200).send({message: "Todo removed", data: removeTodo})
}
