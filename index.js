const ejs = require("ejs");
const path = require("path");
module.exports = async (req, res, code, err, config) => {
  res.statusCode = code;
  var datanum = code;
  var dataver = "v2";
  var datadate = new Date(Date.now() * 1000).toLocaleString("en-US", {
    timeZoneName: "short",
    timeZone: "America/New_York",
  });
  var pathh;
  if (config.custom) {
    pathh = config.templatepath;
  } else {
    pathh = "./error.ejs";
  }
  res.write(
    await ejs.renderFile(pathh, {
      errornumber: code,
      datanum: datanum,
      host: req.headers.host,
      timestamp: datadate,
      version: dataver,
      err: err,
    })
  );
};
