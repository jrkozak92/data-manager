modeule.exports = {
    HOST: "localhost", //Postgres host
    USER: "postgres", //Postgres Service Account Username
    PASSWORD: "123",    //Postgres Service Account Password
    DB: "testdb", //Name of Postgres DB to be used
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};