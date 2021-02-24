const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const loginSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    hashed_password: { type: String, required: true },
    role: { type: String, required: true }
  });


  loginSchema
  .virtual("password")
  .set(function(password) {
    console.log("authenticate1")
    if(password){
      return this.hashed_password = this.encryptPassword(password);
    }
  })
  .get(() => {
    console.log("authenticate12")
    return this.password
  });

loginSchema.methods = {
  authenticate: function(text) {
    return this.encryptPassword(text) === this.hashed_password
 },
  encryptPassword: function(password) {
    return crypto.createHash("sha1").update(password, "binary").digest("hex");
  }   
};

module.exports = mongoose.model('loginDetails', loginSchema);

