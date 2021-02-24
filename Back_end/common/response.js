module.exports = function (res, status, message, output, appcodeError) {
  output = output ? output : {};
  let meta = {};
  meta["status"] = status;
  if (appcodeError) {
    meta["message"] = appcodeError;
  } else {
    meta["message"] = message;
    res.status = status;
    return res.send({
      meta: meta,
      output
    });
  }
};
