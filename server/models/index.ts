import Member from './member'

const Sequelize = require('sequelize')

const config = require('../config')

console.log(config)
interface ISequelize {
  database: string;
  username: string;
  password: string;
}
interface IDb {
  sequelize: ISequelize | object;
  Sequelize: any;
  Member: any;
  Dept: any;
  History: any;
}

const db: IDb = {
  sequelize: {},
  Sequelize: {},
  Member: {},
  Dept: {},
  History: {}
}

const _sequelize = new Sequelize(
  config.db.uri,
  config.db.options
)

db.sequelize = _sequelize
db.Sequelize = Sequelize

db.Member = Member(_sequelize)

module.exports = db
