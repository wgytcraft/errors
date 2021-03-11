module.exports = function (host, res, req, errornumber, errordesc, version, ejs, config) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  date = Date.now() * 1000
  date2 = new Date(date)
  var data
  var data.num = errornumber || config.errornumber
  var data.desc = errordesc || config.errordesc
  var data.ver = version || config.version
  var data.date = date2.toLocaleString("en-US", { timeZoneName: "short", timeZone: "America/New_York" })
  console.log(`${errornumber} ${errordesc} error @ https://${host}${req.url}`)
  res.write(ejs.render(`<!doctype html>
<html>
  <head>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
      <%-errornumber%>
      <%-errordesc%>
    </title>
  </head>
  <body>
    <style>
      @import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
    </style>
    <div class="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
      <div
        class="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div class="w-full md:w-1/2">
          <div class="mb-10 lg:mb-20">
            <%-host%>
          </div>
          <div class="mb-10 md:mb-20 text-gray-600 font-light">
            <h1 class="font-black uppercase text-3xl lg:text-5xl text-yellow-500 mb-10">You seem to be lost!</h1>
            <p><%-errornumber%> at <%-url%></p>
            <p><%-errordesc%></p>
          </div>
          <div class="mb-20 md:mb-0">
            <button class="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600"><i class="mdi mdi-arrow-left mr-2"></i>Go Back</button>
          </div>
        </div>
        <div class="w-full md:w-1/2 text-center">
          <h1 class="font-bold text-4xl md:text-5xl max-w-xl leading-tight">Help</h1>
          <a href="https://wgytcraft.github.io/help/errors">
            Error Codes
          </a>|<a href="https://github.com/wgytwebsites/help/discussions/">
            Get Community Help
          </a>
          <div><a href="https://docs.github.com/en/github/site-policy">Github is governed by seperate legal
              policies</a></div>
        </div>
        <h1 class="font-bold text-4xl md:text-5xl max-w-xl leading-tight">Information</h1>
        <div>© Copyright 2021 William Horning. All Rights Reserved.</div>
        <div>Page requested at
          <%-timestamp%>
        </div>
      </div>
      <div
        class="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform">
      </div>
      <div
        class="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform">
      </div>
    </div>
  </body>
</html>`, { errornumber: errornumber, data.num: data.desc, url: `https://${host}${req.url}`, host: host || "wgytcraft selfhosted", timestamp: data.date, version: data.ver }));
  res.end();
}
