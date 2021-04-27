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
  var paath = path.join(config.dirname, "error.ejs");
  var ejsss = ejs.renderFile(
    paath,
    {
      errornumber: code,
      datanum: datanum,
      host: "1host.js selfhosted",
      timestamp: datadate,
      version: dataver,
      err: err,
    },
    {},
    (err, str) => {
      res.write(str);
    }
  );
};
