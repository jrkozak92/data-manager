const db = require("../models");
const Project = db.projects;
const Op = db.Sequelize.Op;

// Routes that do not need verification will go first

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

    Project.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An unknown error occurred retreiving the projects."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Project.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Project by id=" + id
            });
        });
};

exports.findAllLinks = (req, res) => {
    Project.findAll({ where: { link: !null } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An unknown error occurred while retrieving projects."
            });
        });
};


// Routes that need verification go after this .use
exports.use = (req, res, next) => {
    const check = prompt("What's the secret password?", "Hmm...");

    if (check.toLowerCase() == "secret password") {
        return alert("Very clever. Try again.");
    } else if (check.toLowerCase() == "duh") {
        alert("You got it, Boss.");
        next();
    } else {
        return alert("Sorry, that's not it. If you'd like to request a project be added, you can always reach out to me.");
    }   
};

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const project = {
        title: req.body.title,
        description: req.body.description,
        link: req.body.link ? req.body.link : "No link provided, yet."
    };

    Project.create(project)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An unknown error occurred."
            })
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Project.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: `Successfully updated Project with id=${id}.`
            });
        } else {
            res.send({
                message: `Cannot update Project with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Project with id=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Project.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Project was deleted successfully"
                });
            } else {
                res.send({
                    message: `Cannot delete Project with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Project with id=" + id        
            });
        });
};

exports.deleteAll = (req, res) => {
    Project.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Projects were deleted successfully.` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An unknown error occurred while removing all projects."
            });
        });
};