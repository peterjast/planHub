var db = require("../models");

var passport = require('passport');

module.exports = function (app) {

    app.get("/dashboard", function (req, res) {
        if(req.isAuthenticated()){
            db.Tasks.findAll({}).then(function (dbTasks) {
                console.log("dbTasks", dbTasks);

                var hbsObj = {
                    Tasks: [],
                    id: req.session.passport.user,
                    isloggedin: req.isAuthenticated()

                }
                dbTasks.forEach(function(task){
                    hbsObj.Tasks.push(task.dataValues);
                });

                res.render("dashboard", hbsObj);
            })
        }
        else{
            res.redirect("/");
        }
      
    });

     app.get("/dashboard/:account_id/:account_key", function (req, res) {
         db.Accounts.findAll({
             where: {
                 account_id: req.params.account_id,
                 account_key: req.params.account_key
             }
         }).then(function (dbAccounts) {
             res.json(dbAccounts);
         });
     });




    // app.put("/dashboard/update/:task_id", function (req, res) {
    //     db.Tasks.update({
    //         start_date: req.body.input_end
    //     }, {
    //             where: { id: req.params.task_id }
    //         }).then(function (result) {
    //             console.log("this is result", result)
    //             if (result.changedRows == 0) {
    //                 return res.status(404).end();
    //             } else {
    //                 res.status(200).end();
    //             }
    //         })
    // })

}