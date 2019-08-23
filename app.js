// Load required libraries.
const http = require('http')
const fs = require('fs')
const path = require("path")
const hostname = "127.0.0.1"
const port = 5000

// Define web server.
const server = http.createServer((req, res) => {

    // Get the path that is in the url.
    var url = req.url

    if (url.length < 2) {
        url = "index.html"
    }

    console.log("url:  " + url)

    // HTTP 404 with message.
    if (url.endsWith("oops.html")) {
        err_message = "Relax, this was only a test."
        return_404(req, res, err_message)
        return
    }

    // HTTP 500 with message.
    if (url.endsWith("bummer.html")) {
        err_message = "Relax, this was only a test."
        return_500(req, res, err_message)
        return
    }

    // Determine which file and content type to return.
    if (url.endsWith("/Assignment%2001/index.html")) {
        var file_name = path.join(process.cwd(), '/Assignment 01/index.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Assignment%2002/index.html")) {
        var file_name = path.join(process.cwd(), '/Assignment 02/index.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Assignment%2007/index.html")) {
        var file_name = path.join(process.cwd(), '/Assignment 07/index.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Assignment%2007/static/js/bar_chart.js")) {
        var file_name = path.join(process.cwd(), '/Assignment 07/static/js/bar_chart.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Assignment%2007/static/css/viterbi.css")) {
        var file_name = path.join(process.cwd(), '/Assignment 07/static/css/viterbi.css')
        var content_type = "text/css"
    }
    else if (url.endsWith("/Assignment%2007/static/js/sae_hidden_or_visible.js")) {
        var file_name = path.join(process.cwd(), '/Assignment 07/static/js/sae_hidden_or_visible.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Assignment%2007/static/json/data.json")) {
        var file_name = path.join(process.cwd(), '/Assignment 07/static/json/data.json')
        var content_type = "text/json"
    }
    else if (url.endsWith(".html")) {
        var file_name = path.join(process.cwd(), '/templates/', url)
        var content_type = "text/html"
    }
    else if (url.endsWith(".css")) {
        var file_name = path.join(process.cwd(), '/static/css/', url)
        var content_type = "text/css"
    }
    else if (url.endsWith(".js")) {
        var file_name = path.join(process.cwd(), '/static/js/', url)
        var content_type = "application/javascript"
    }
    else if (url.endsWith(".svg")) {
        var file_name = path.join(process.cwd(), '/static/img/', url)
        var content_type = "image/svg+xml"
    }
    else
        var file_name = "unknown"

    // Return the requested file.
    return_file(req, res, file_name, content_type)
    return

});

function return_file(req, res, file_name, content_type) {

    if (fs.existsSync(file_name)) {

        fs.readFile(file_name, "binary", (err, file) => {

            if (err) {
                return_500.display(req, res, err)
                return
            }

            res.statusCode = 200
            res.setHeader('Content-Type', content_type)
            res.end(file, "binary")
            return
        })
    } else {
        return_404(req, res, file_name)
        return
    }

}

function return_404(req, res, err_message) {

    var file_404 = path.join(process.cwd(), "/templates/404.html")

    if (fs.existsSync(file_404)) {

        fs.readFile(file_404, "binary", (err, file) => {

            if (err) {
                var s = "fs.readFile or 404.html threw an error:  err.code:  " + err.code
                console.log(s)
                return_500(req, res, err)
            }
            res.statusCode = 404
            res.setHeader('Content-Type', 'text/html')
            file = file.replace("unknown", err_message)
            res.end(file, "binary")
            return
        })

    } else {
        var s = "File not found:  " + file_404
        console.log(s)
        return_500(req, res, s)
    }
}

function return_500(req, res, err_message) {

    var file_500 = path.join(process.cwd(), "/templates/500.html")

    if (fs.existsSync(file_500)) {

        fs.readFile(file_500, "binary", (err, file) => {

            if (err) {
                var s = "fs.readFile or 500.html threw an error:  err.code:  " + err.code
                console.log(s)
                return
            }
            res.statusCode = 500
            res.setHeader('Content-Type', 'text/html')
            file = file.replace("unknown", err_message)
            res.end(file, "binary")
            return
        })

    } else {
        var s = "File not found:  " + file_500
        console.log(s)
        return_404(req, res, s)
        return
    }
}

// Start server.
var instance = server.listen(process.env.PORT || 5000, function () {
    var port = instance.address().port;
    console.log("Express is working on port " + port);
});







