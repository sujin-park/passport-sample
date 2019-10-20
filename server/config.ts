const path = require('path')
const dotenv = require('dotenv-safe')

dotenv.load({
  sample: path.join(__dirname, '../.env'),
})

const config = {
  development: {
    port: 4000,
    syncForce: false,
    db: {
      options: {
        dialect: 'mysql',
        timezone: 'Asia/Seoul',
        logging: true,
        benchmark: false,
        retry: {
          match: [/SequelizeConnectionError/],
          max: 2
        }
      },
      uri: process.env.DB_URI
    }
  }
}

module.exports = config.development
export default module.exports
