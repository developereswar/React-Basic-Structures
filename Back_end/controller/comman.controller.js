const customerModels = require("../models/cutomerlists.models");
const response = require("../common/response");

const commonController =  {
    getAllCustomers:  async (req, res) => {
        await customerModels.find({}, (err, user) => {
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
    addCustomers: async (req, res) => {
        await customerModels.create(req.body, (err, data) => {
            try {
                return response(res, 200, "ok", data);
            }catch(error){
                return response(res, 500, "failure", err);      
            }
          })
    },

    editCustomer: async (req, res) => {
      const { _id } = req.body;
      await customerModels.findByIdAndUpdate(_id, req.body,{ new: true}, (err, data) => {
          try {
              return response(res, 200, "success", data);
          }catch(err){
              return response(res, 500, "failure", err);      
          }
        })
  },
  deleteCustomer:async (req, res) => {
    const { _id } = req.body;
    await customerModels.findByIdAndRemove(_id, (err, data) => {
        try {
            return response(res, 200, "success", data);
        }catch(err){
            return response(res, 500, "failure", err);      
        }
      })
}
}

module.exports = commonController;
