
var db = require("../models");
var passport = require('passport');

module.exports = function (app) {

    //Brings to add-tasks form.
    app.get("/post-tasks/new", function (req, res) {
        if(req.isAuthenticated()){
            var user = {
                id: req.session.passport.user,
                isloggedin: req.isAuthenticated()
            }
            res.render("add-tasks", user);
        }else {
            res.redirect("/")
        }
        
    });

    //Posting task to task table.
    app.post("/post-tasks/new", function (req, res) {
        console.log(req.body);
        console.log("is logged in",req.isAuthenticated())
        if(req.isAuthenticated()){
            var user = {
                id: req.session.passport.user,
                isloggedin: req.isAuthenticated()
            };
            db.Tasks.create({
                task_name: req.body.task_name,
                owner_id: req.session.passport.user
            }).then(function (dbTasks) {
                res.redirect("/post-tasks/new");
            });
            
        }else {
            res.redirect("/")
        }
        
    });

            
    //Update the task's desceription etc...
    app.get("/post-tasks/update/:account_id/:account_key/:task_id", function (req, res) {
        db.Accounts.findOne({
            where: {
                id: req.params.account_id,
                account_key: req.params.account_key
            }
        }).then(function (dbTasks) {
            console.log(dbTasks);
            // //IF confirmed then apply below.
             db.tasks.update({
                 completed: req.body.completed
             }, {
                     where: {
                         id: req.params.task_id
                     }
                 }).then(function (result) {
                     if (result.changedRows == 0) {
                         return res.status(404).end();
                     } else {
                         res.status(200).end();
                     }
                 })

        })

    });

    //Delete a task.
    app.delete("/post-tasks/:task_id", function (req, res) {
        db.tasks.destroy({
            where: {
                id: req.params.task_id
            }
        }).then(function (result) {
            if (result.affectedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
};

