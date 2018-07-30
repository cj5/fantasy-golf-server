import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'fantasy_golf_db',
  'fantasy_golf_admin',
  'fantasygolfpassword',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

const db = {
  User: sequelize.import('./user')
};

// Object.keys(db).forEach((modelName) => {
//   if ('associate' in db[modelName]) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;