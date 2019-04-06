module.exports = function(app){

    app.get("/", function(req,res){
        if(req.isAuthenticated()){
            var user = {
                id: req.session.passport.user,
                isloggedin: req.isAuthenticated()
            };
            res.render("home", user);
        }
        else{
            res.render("home");
        }
        
    });

    app.get("/list-tasks", function(req,res){
        res.render("dashboard");
    });

    app.get("/signup", function(req,res){
        if(req.isAuthenticated()){
            res.redirect("/acounts/view");
        }else{
           res.render("accounts"); 
        }
        
    });

    app.get("/add-tasks", function(req, res){
        if(req.isAuthenticated()){
            res.render("add-tasks");
        }else {
            res.redirect()
        }
 
    });



    app.get("/list-tasks/tasks", function(req,res){
        db.Tasks.findAll({
        }).then(function(result){
            res.render(result);
        });
    });

    app.put("/list-tasks/tasks/:account_id/:account_key", function(req,res){
        db.Tasks.update({

        }).then(function(result){
            res.render(result);
        });
    });

};