module.exports = app => {
    const projects = require("../controllers/project.controller.js");

    var router = require("express").Router();

    router.post("/", projects.create);

    router.get("/", projects.findAll);

    router.get("/link", projects.findAllLinks);

    router.get("/:id", projects.findOne);

    router.put("/:id", projects.update);

    router.delete("/:id", projects.delete);

    router.delete("/", projects.deleteAll);

    app.use('/api/projects', router);
};