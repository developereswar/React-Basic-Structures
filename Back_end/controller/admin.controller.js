const response = require("../common/response");
const loginModel = require("../models/login.models");
const productModel = require("../models/product.models");
const stagesModel = require("../models/stage.models");

const adminController = {
  // add
  register: async (req, res) => {
    await loginModel.create(req.body, (err, user) => {
      try {
        if (user) {
          return response(res, 200, "ok", user);
        } else {
          throw "Internal Error";
        }
      } catch (error) {
        return response(res, 500, "failure", err);
      }
    });
  },

  // add stages is used to add product stages manually
  // Example
  /*
    {
    "productName": "sofa",
    "requiredStages": ["Carpentry", "Polishing", "Steel Work", "Stitching"]
    }

  */
  addStages: async (req, res) => {
    await stagesModel.create(req.body, (err, data) => {
      try{
        return response(res, 200, 'ok', data)
      } catch(error) {
        return response(res, 500, 'failure', err)
      }
    })
  },

  fetchStages: async (req, res) => {
    await stagesModel.find({}, (err, user) => {
      try {
        if (user) {
          return response(res, 200, "ok", user);
        } else {
          throw "Internal Error";
        }
      } catch (error) {
        return response(res, 500, "failure", err);
      }
    });
  },

  // add Product
  addProduct: async(req, res) => {
    await productModel.create(req.body, (err, user) => {
      try {
        if (user) {
          return response(res, 200, "ok", user);
        } else {
          throw "Internal Error";
        }
      } catch (error) {
        return response(res, 500, "failure", err);
      }
    });
  },
  // view products
  getProduct: async(req, res) => {
    await productModel.find({}, (err, user) => {
      try {
        if (user) {
          return response(res, 200, "ok", user);
        } else {
          throw "Internal Error";
        }
      } catch (error) {
        return response(res, 500, "failure", err);
      }
    });
  },

};

module.exports = adminController;
