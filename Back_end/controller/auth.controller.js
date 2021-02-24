const response = require("../common/response");
const loginModel = require("../models/login.models");
const jwt = require("jsonwebtoken");

let secretKey = "SOFASET";

const authController = {
  login: async (req, res) => {
    await loginModel.findOne({ username: req.body.username }, (err, data) => {
      if (err) throw err;
      // fetch User data
      let output = {};
      try {
        if (data.authenticate(req.body.password)) {
          output["token"] = jwt.sign(
            { username: req.body.username },
            secretKey
          );
          output.username = data.username;
          output.role = data.role;
          res.cookie("accessToken", "Bearer " + output.token);
          return response(res, 200, "success", output);
        } else {
          return response(res, 404, "Invalid Username & Password");
        }
      } catch (error) {
        return response(res, 500, "failure", err);
      }
    });
  },

};

module.exports = authController;
