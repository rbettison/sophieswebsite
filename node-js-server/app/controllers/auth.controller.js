const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signin = (req, res) => {
    User.findOne({
      where: {
        username: req.body.username
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
        bcrypt.compare(
          req.body.password,
          user.password,
          (err, same) => {
            if (!same) {
                return res.status(401).send({
                  accessToken: null,
                  message: "Invalid Password!"
                });
            } else {
                var token = jwt.sign({ id: user.id }, config.secret, {
                    expiresIn: 86400 // 24 hours
                });
            
                res.status(200).send({
                      id: user.id,
                      username: user.username,
                      email: user.email,
                      accessToken: token
                });
            }
          }
        ) 
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };