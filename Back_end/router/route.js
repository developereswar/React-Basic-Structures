const admin = require('../controller/admin.controller');
const auth = require('../controller/auth.controller');
const commonController = require('../controller/comman.controller');
const { validate, ValidationError, Joi } = require('express-validation')
// version
let URL = '/api/v1'

const loginValidation = {
  body: Joi.object({
    username: Joi.string()
      .required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  }),
}

const appRoute = (app) => {
  // for only Admin Routing
  app.get(`${URL}/get_product`, admin.getProduct);
  app.post(`${URL}/add_product`, admin.addProduct);
  app.get(`${URL}/stages`, admin.fetchStages);
  app.post(`${URL}/add_stages`, admin.addStages);
  app.post(`${URL}/register`, admin.register);

  // common routing
  app.post(`${URL}/login`, validate(loginValidation, {}, {}), auth.login);
  app.get(`${URL}/get_customer`, commonController.getAllCustomers);
  app.post(`${URL}/add_customer`, commonController.addCustomers);
  app.put(`${URL}/udpate_customer`, commonController.editCustomer);
  app.delete(`${URL}/delete_customer`, commonController.deleteCustomer);

  app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
   
    return res.status(500).json(err)
  })
}


module.exports = appRoute;