import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import databaseConfig from '../config/config';

const basename = path.basename(__filename);
let configEnv;
let sequelize;
const db = {};

// eslint-disable-next-line prefer-const
configEnv = databaseConfig.development;

if (configEnv.use_env_variable) {
  sequelize = new Sequelize(process.env[configEnv.use_env_variable], configEnv);
} else {
  sequelize = new Sequelize(
    configEnv.database, configEnv.username, configEnv.password, configEnv,
  );
}

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0)
    && (file !== basename)
    && (file.slice(-3) === '.js'))
  .forEach((modelFile) => {
    const model = sequelize.import(path.join(__dirname, modelFile));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
