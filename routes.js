const asyncMiddleware = require('./utils/asyncMiddleware')
const router = require('express').Router()
const todo = require('./controllers/todo')

router.get('/list', asyncMiddleware(todo.list))
router.post('/addTodo', asyncMiddleware(todo.addTodo))
router.get('/removeTodo', asyncMiddleware(todo.removeTodo))
router.post('/editTodo', asyncMiddleware(todo.editTodo))
router.get('/markDone', asyncMiddleware(todo.markDone))
router.get('/removeDone', asyncMiddleware(todo.removeDone))

router.get('/', asyncMiddleware(todo.index))

module.exports = router
