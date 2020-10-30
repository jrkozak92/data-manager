module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("project", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        link: {
            type: Sequelize.STRING
        }
    });

    return Project;
};