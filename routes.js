var express = require("express");
var router = express.Router();
var Reg = require("./models/register");

router.get("/", function(req, res) {

  res.render("Regi");

});

router.post("/", function(req, res) {

    var user = {

       username: req.body.username,
       email: req.body.email,
       password: req.body.pass       
   };

    Reg.create(user, function(err, newUser) {
      if(err) return next(err);
     
      return res.json('newUser');

    });
});










module.exports = router;