var express = require("express");
var router = express.Router();
var Reg = require("./models/register");

router.get("/", function(req, res) {

  res.render("Regi");

   });

router.get("/login", function(req, res) {

  res.render("Login");

   });
  

router.post("/", function(req, res) {

    var user = {

       username: req.body.username,
       email: req.body.email,
       password: req.body.password       
   };

    Reg.create(user, function(err, newUser) {
      if(err) res.send(err);
     
     Reg.find(function(err, newUser) {
                if (err)
                    res.send(err)
               res.json(newUser);
     
    });
  });
});










module.exports = router;