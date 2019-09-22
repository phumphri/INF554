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

    console.log("\n\n url:  " + url)

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

    // Assignment 1
    if (url.endsWith("/Assignment%2001/index.html")) {
        var file_name = path.join(process.cwd(), '/Assignment 01/index.html')
        var content_type = "text/html"
    }

    // Assignment 2
    else if (url.endsWith("/Assignment%2002/index.html")) {
        var file_name = path.join(process.cwd(), '/Assignment 02/index.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Assignment%2002/static/svg/sae_2.svg")) {
        var file_name = path.join(process.cwd(), '/Assignment 02/static/svg/sae_2.svg')
        process.stdout.write("\n\nAssignment 2 svg:  " + file_name)
        var content_type = "image/svg+xml"
    }

    // Assignment 3
    else if (url.endsWith("/Assignment%2003/index.html")) {
        var file_name = path.join(process.cwd(), '/Assignment 03/index.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Assignment%2003/static/png/NYTimes.PNG")) {
        var file_name = path.join(process.cwd(), '/Assignment 03/static/png/NYTimes.PNG')
        var content_type = "image/png"
    }
    else if (url.endsWith("/Assignment%2003/static/png/Forbes.PNG")) {
        var file_name = path.join(process.cwd(), '/Assignment 03/static/png/Forbes.PNG')
        var content_type = "image/png"
    }
    else if (url.endsWith("/Assignment%2003/static/svg/infographic_1.svg")) {
        var file_name = path.join(process.cwd(), '/Assignment 03/static/svg/infographic_1.svg')
        var content_type = "image/svg+xml"
    }
    else if (url.endsWith("/Assignment%2003/static/svg/infographic_2.svg")) {
        var file_name = path.join(process.cwd(), '/Assignment 03/static/svg/infographic_2.svg')
        var content_type = "image/svg+xml"
    }
    else if (url.endsWith("/Assignment%2003/static/js/sae_hidden_or_visible.js")) {
        var file_name = path.join(process.cwd(), '/Assignment 03/static/js/sae_hidden_or_visible.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Assignment%2003/static/css/viterbi.css")) {
        var file_name = path.join(process.cwd(), '/Assignment 03/static/css/viterbi.css')
        var content_type = "text/css"
    }


    // Assignment 4
    else if (url.endsWith("/Assignment%2004/index.html")) {
        var file_name = path.join(process.cwd(), '/Assignment 04/index.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Assignment%2004/static/js/initialization.js")) {
        var file_name = path.join(process.cwd(), '/Assignment 04/static/js/initialization.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Assignment%2004/static/js/main.js")) {
        var file_name = path.join(process.cwd(), '/Assignment 04/static/js/main.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Assignment%2004/static/js/common_functions.js")) {
        var file_name = path.join(process.cwd(), '/Assignment 04/static/js/common_functions.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Assignment%2004/static/js/html_table.js")) {
        var file_name = path.join(process.cwd(), '/Assignment 04/static/js/html_table.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Assignment%2004/static/js/bar_chart.js")) {
        var file_name = path.join(process.cwd(), '/Assignment 04/static/js/bar_chart.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Assignment%2004/static/js/scatterplot_chart.js")) {
        var file_name = path.join(process.cwd(), '/Assignment 04/static/js/scatterplot_chart.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Assignment%2004/static/js/bubble_chart.js")) {
        var file_name = path.join(process.cwd(), '/Assignment 04/static/js/bubble_chart.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Assignment%2004/static/css/viterbi.css")) {
        var file_name = path.join(process.cwd(), '/Assignment 04/static/css/viterbi.css')
        var content_type = "text/css"
    }
    else if (url.endsWith("/Assignment%2004/static/js/sae_hidden_or_visible.js")) {
        var file_name = path.join(process.cwd(), '/Assignment 04/static/js/sae_hidden_or_visible.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Assignment%2004/static/csv/metadata.csv")) {
        var file_name = path.join(process.cwd(), '/Assignment 04/static/csv/metadata.csv')
        var content_type = "text/csv"
    }
    else if (url.endsWith("/Assignment%2004/static/csv/data.csv")) {
        var file_name = path.join(process.cwd(), '/Assignment 04/static/csv/data.csv')
        var content_type = "text/csv"
    }

    // Assignment 7
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

    // Project Proposal
    else if (url.endsWith("/Project%20Proposal%201/index.html")) {
        var file_name = path.join(process.cwd(), '/Project Proposal/metro_bike_share.sozi.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Project%20Proposal%202/index.html")) {
        var file_name = path.join(process.cwd(), '/Project Proposal/metro_bike_share_2.sozi.html')
        var content_type = "text/html"
    }

    // Project
    else if (url.endsWith("/Project/index.html")) {
        var file_name = path.join(process.cwd(), '/Project/index.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Project/static/html/header.html")) {
        var file_name = path.join(process.cwd(), '/Project/static/html/header.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Project/static/html/assignment.html")) {
        var file_name = path.join(process.cwd(), '/Project/static/html/assignment.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Project/static/html/trips.html")) {
        var file_name = path.join(process.cwd(), '/Project/static/html/trips.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Project/static/html/riders.html")) {
        var file_name = path.join(process.cwd(), '/Project/static/html/riders.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Project/static/html/stations.html")) {
        var file_name = path.join(process.cwd(), '/Project/static/html/stations.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Project/static/html/bikes.html")) {
        var file_name = path.join(process.cwd(), '/Project/static/html/bikes.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Project/static/html/media.html")) {
        var file_name = path.join(process.cwd(), '/Project/static/html/media.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Project/static/html/summary.html")) {
        var file_name = path.join(process.cwd(), '/Project/static/html/summary.html')
        var content_type = "text/html"
    }
    else if (url.endsWith("/Project/static/css/metro_bike_share.css")) {
        var file_name = path.join(process.cwd(), '/Project/static/css/metro_bike_share.css')
        var content_type = "text/css"
    }
    else if (url.endsWith("/Project/static/js/trips.js")) {
        var file_name = path.join(process.cwd(), '/Project/static/js/trips.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Project/static/js/riders.js")) {
        var file_name = path.join(process.cwd(), '/Project/static/js/riders.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Project/static/js/stations.js")) {
        var file_name = path.join(process.cwd(), '/Project/static/js/stations.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Project/static/js/bikes.js")) {
        var file_name = path.join(process.cwd(), '/Project/static/js/bikes.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Project/static/js/media.js")) {
        var file_name = path.join(process.cwd(), '/Project/static/js/media.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Project/static/js/summary.js")) {
        var file_name = path.join(process.cwd(), '/Project/static/js/summary.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Project/static/js/w3-include-html.js")) {
        var file_name = path.join(process.cwd(), '/Project/static/js/w3-include-html.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Project/static/js/sae_hidden_or_visible.js")) {
        var file_name = path.join(process.cwd(), '/Project/static/js/sae_hidden_or_visible.js')
        var content_type = "application/javascript"
    }
    else if (url.endsWith("/Project/static/json/trips_by_year_month.json")) {
        var file_name = path.join(process.cwd(), '/Project/static/json/trips_by_year_month.json')
        var content_type = "text/json"
    }
    
    // Other applications.
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
        var file_name = path.join(process.cwd(), '/static/svg/', url)
        process.stdout.write("\n\nGeneric svg, should not be getting here.")
        var content_type = "image/svg+xml"
    }
    else
        var file_name = "unknown"

    // Return the requested file.
    return_file(req, res, file_name, content_type)
    return

});

// Return the response for the request file or 404 if not found.
function return_file(req, res, file_name, content_type) {

    process.stdout.write("\n\nreturn_file Looking for file " + file_name)

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
        process.stdout.write("\n\n return_file could not find file " + file_name)
        return_404(req, res, file_name)
        return
    }

}

// Return the 404 response for a file not found or 500 if something evil comes this way.
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

// Return the 500 response for something evil comes this way.
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
    console.log("Server is working on port " + port);
});







