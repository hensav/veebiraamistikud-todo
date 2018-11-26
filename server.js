const port = process.env.PORT || 3000
require('dotenv').config()
const app = require('./app')
const databaseConnection = require('./db')

;(async () => {
  try {
    await databaseConnection
    const serverConnection = app.listen(port, () => console.log(`\nServer started\n`))
    process.on('SIGINT', () => { serverConnection.close() &&
    console.log('\nServer was shut down gracefully') })
  } catch (error) { console.log(`\nServer encountered ${error}\n`) }
})()
