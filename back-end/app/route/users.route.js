module.exports = app => {
    const users = require("../model/users.model.js");
    var router = require("express").Router();
    //Create a new User
    router.post("/", users.create);
    //print all users
    router.get("/", users.findAll);
    //get one user
    router.get("/:id", users.findOne);
    app.use('/api/users', router);
}