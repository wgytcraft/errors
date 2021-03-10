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
  res.write(ejs.render(`<!DOCTYPE html>
<html lang="en" class="text-white bg-blue-900 antialiased">

<head>
	<!-- MOST META TAGS -->
	<link rel="stylesheet" href="https://unpkg.com/@tailwindcss/typography@0.2.x/dist/typography.min.css" />
	<meta name="theme-color" content="#7f1d1d" />
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- SEO -->
	<title>
		<%-errornumber%>
			<%-errordesc%>
	</title>
	<!-- CSS AND JS -->
	<link href="//www.wgyt.tk/css/tailwind.css" rel="stylesheet">
</head>

<body>
	<!-- NAVBAR -->
	<nav class="bg-red-900 p-2 mt-0 sticky w-full z-10 top-0 overflow-x-auto" id="top">
		<div class="container mx-auto flex flex-wrap items-center">
			<div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-bold"><a href="/" class="text-white no-underline hover:text-white hover:no-underline font-bold nuxt-link-active"><span class="text-2xl"><%-host%></span></a>
            </div>
        </div>
    </nav>
    <!-- hero -->
    <div class="hero py-16 bg-black" id="hero">
        <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            <div class=" grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div class="col-span-6">
                    <h1 class="font-bold text-4xl md:text-5xl max-w-xl leading-tight"><%-host%></h1> 
                    <p class="text-2xl leading-relaxed mt-8 font-semibold">
                        <%-errornumber%> Error</p>
                </div>
                <div class="col-span-6">
                    <p class="text-2xl leading-relaxed mt-8 font-semibold">
                        <%-errordesc%>
                    </p>
                    <p class="text-2xl leading-relaxed mt-8 font-semibold">at
                        <%-url%>
                    </p>
                    <p class="text-2xl leading-relaxed mt-8 font-semibold">Thats all we know</p>
                </div>
            </div>
        </div>
    </div>
    <footer class="hero py-16 bg-red-900" id="hero">
        <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            <div class=" grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div class="col-span-6">
                    <h1 class="font-bold text-4xl md:text-5xl max-w-xl leading-tight">Help</h1> 
                    <a href="https://wgytcraft.github.io/help/errors">
				Error Codes
			</a>|<a href="https://github.com/wgytwebsites/help/discussions/">
				Get Community Help
			</a>
			<div><a href="https://docs.github.com/en/github/site-policy">Github is governed by seperate legal policies</a></div>
                </div>
                <div class="col-span-6">
                    <h1 class="font-bold text-4xl md:text-5xl max-w-xl leading-tight">Information</h1>
                    <div>© Copyright 2021 William Horning. All Rights Reserved.</div>
                    <div>Page requested at
                        <%-timestamp%>
                    </div>
                </div>
            </div>
    </footer>
		    <footer class="hero py-16" id="hero">
        <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            <div class=" grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div class="col-span-6">
                    <h1 class="font-bold text-4xl md:text-5xl max-w-xl leading-tight">Logs</h1> 
                    <a href="/__logs">
				Wgytcraft logs
			</a>
			<div><a>Wgytcraft isn't responsible for errors caused by the code of the website.</a></div>
                </div>
                <div class="col-span-6">
                    <h1 class="font-bold text-4xl md:text-5xl max-w-xl leading-tight">Wgytcraft</h1>
                    <div>Wgytcraft is a hosting platform for websites and services.</div>
                    <div>Wgytcraft V<%-version%>
                    </div>
                </div>
            </div>
    </footer>
</body>
`, { errornumber: errornumber, data.num: data.desc, url: `https://${host}${req.url}`, host: host || "wgytcraft selfhosted", timestamp: data.date, version: data.ver }));
  res.end();
}
