const {Sequelize} = require('sequelize');
const config = require('./config');
const configEnv = config.database[config.env];

const sequelize = new Sequelize({
    database: configEnv.database,
    host: configEnv.host,
    username: configEnv.username,
    password: configEnv.password,
    dialect: "mysql",
});

(async function() {
    try {
        await sequelize.authenticate()
        console.log('Success to Configuration');
        sequelize.sync({ force: false, logging: false });
    } catch (error) {
        console.log(error, 'Database not found');
    }
})()

module.exports = sequelize