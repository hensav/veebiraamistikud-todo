const Exercise = require('../models/exercise')

exports.list = async (req, res) => {
  res.status(201).send(await Exercise.find({}))
}

exports.addExercise = async (req, res) => {
  const { name, mistakes, duration, feedback } = req.query

  const newLog = await new Exercise({
    name,
    mistakes,
    duration,
    feedback
  }).save()

  if (!newLog) throw new Error('Not created')
  return res.status(201).send({ message: 'New Log created', data: newLog})
}
