module.exports = app => {
    const projects = require("../controllers/project.controller.js");

    var router = require("express").Router();

    router.get("/", projects.findAll);

    router.get("/link", projects.findAllLinks);

    router.get("/:id", projects.findOne);

    // Routes that need verification go after this .use
    router.use("/", (req, res, next) => {
        try {
            let check = prompt("What's the secret password?", "Hmm...");
    
            if (check.toLowerCase() == "secret password") {
                return alert("Very clever. Try again.");
            } else if (check.toLowerCase() == "duh") {
                alert("You got it, Boss.");
                next();
            } else {
                return alert("Sorry, that's not it. If you'd like to request a project be added, you can always reach out to me.");
            }       
        } catch (error) {
            res.status(500).send({
                message: error.message || "Something went wrong."
            });
        }  
    });

    router.post("/", projects.create);

    router.put("/:id", projects.update);

    router.delete("/:id", projects.delete);

    router.delete("/", projects.deleteAll);

    app.use('/db/projects', router);
};