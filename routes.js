const asyncMiddleware = require('./utils/asyncMiddleware')
const router = require('express').Router()
const todo = require('./controllers/todo')

router.get('/list', asyncMiddleware(todo.list))
router.post('/addTodo', asyncMiddleware(todo.addTodo))
router.delete('/removeTodo', asyncMiddleware(todo.removeTodo))

module.exports = router
