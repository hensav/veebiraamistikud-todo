const asyncMiddleware = require('./utils/asyncMiddleware')
const router = require('express').Router()
const exercise = require('./controllers/exercise')

router.get('/list', asyncMiddleware(exercise.list))
router.get('/addLog', asyncMiddleware(exercise.addExercise))

module.exports = router
