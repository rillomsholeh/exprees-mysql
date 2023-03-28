module.exports = {
    app: {
        debug: true,
        host: 'localhost',
        port: 3306
    },
    database: {
        development: {
            username: "root",
            password: "root",
            database: "eduwork-sequelize",
            host: "localhost",
            dialect: "mysql",
            logging: true
        },
        staging: {
            username: "root",
            password: "root",
            database: "eduwork-sequelize",
            host: "localhost",
            dialect: "mysql",
            logging: true,
            use_env_variable: false
        },
        production: {
            username: "root",
            password: "root",
            database: "eduwork-sequelize",
            host: "localhost",
            dialect: "mysql",
            logging: true,
            use_env_variable: false
        },
        production: {
            username: "",
            password: "",
            database: "",
            host: "127.0.0.1",
            dialect: "mysql",
            logging: true
        },
    },
    jwtExpired: 3306,
    jwtSecret: 'express',
    env: 'development',
    baseUrl: 'http://localhost:3306',
    staticPath: {
        img: '/img/'
    },
};
