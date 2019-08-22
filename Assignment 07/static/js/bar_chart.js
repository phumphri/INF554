// Declare global variables.
g = {
    d: null,    // All data.
    f: null,    // Filter data.
    svg: null,
    year: "2016",
    series: "Production",
    order: "Country",
    y_scale: null,
    x_scale: null,
    x_domain: [],
    svg_width: 500,
    svg_height: 300,
    top_margin: 50,
    bottom_margin: 50,
    left_margin: 50,
    right_margin: 50,
    top_border: 50,
    bottom_border: 250,
    left_border: 50,
    right_border: 450,
    chart_width: 400,
    chart_height: 200
}

function set_global_variables() {

    console.log("Setting global variables.")

    // Define svg size.
    g.svg_width = Math.floor(window.innerWidth * (8 / 12))
    g.svg_height = Math.floor(window.innerHeight * (6 / 12))

    // Define margins.
    g.top_margin = Math.floor(g.svg_height * 0.05)
    g.bottom_margin = Math.floor(g.svg_height * 0.05)
    g.left_margin = Math.floor(g.svg_width * 0.05)
    g.right_margin = Math.floor(g.svg_width * 0.05)

    // Define borders.
    g.top_border = g.top_margin
    g.bottom_border = g.svg_height - g.bottom_margin
    g.left_border = g.left_margin
    g.right_border = g.svg_width - g.right_margin

    // Define chart area.
    g.chart_width = g.svg_width - g.left_margin - g.right_margin
    g.chart_height = g.svg_height - g.top_margin - g.bottom_margin

    console.log("g.svg_width:  " + g.svg_width)
    console.log("g.svg_height:  " + g.svg_height)
    console.log("g.top_margin:  " + g.top_margin)
    console.log("g.bottom_margin:  " + g.bottom_margin)
    console.log("g.left_margin:  " + g.left_margin)
    console.log("g.right_margin:  " + g.right_margin)
    console.log("g.top_border:  " + g.top_border)
    console.log("g.bottom_border:  " + g.bottom_border)
    console.log("g.chart_width:  " + g.chart_width)
    console.log("g.chart_height:  " + g.chart_height)
}

function append_svg() {

    // Find the fieldset that will contain the svg.
    console.log("Selecting bar_chart_fieldset")
    var fieldset = d3.select("#bar_chart_fieldset")

    // Create the svg in the fieldset.
    console.log("Appending svg.")
    var svg = fieldset.append("svg")
        .attr("width", g.svg_width)
        .attr("height", g.svg_height)

    g.svg = svg
}

function calculate_x_scale() {

    console.log("Calculating x_domain and x_scale.")

    var d = g.f
    var x_domain = []

    for (var i = 0; i < d.length; i++) {
        x_domain.push(d[i].Country)
    }

    g.x_domain = x_domain

    var x_scale = d3.scaleBand()
        .domain(g.x_domain)
        .rangeRound([0, g.chart_width])
        .paddingInner(0.05)

    g.x_scale = x_scale
}

function calculate_y_scale() {

    console.log("Calculating y_scale.")

    var d = g.f

    var min_y = d3.min(d, (d) => { return d.Value })
    var max_y = d3.max(d, (d) => { return d.Value })

    var y_scale = d3.scaleLinear()
        .domain([min_y, max_y])
        .range([0, g.chart_height])
        .nice()

    g.y_scale = y_scale
}

function append_rectangles(mode) {


    var d = g.f

    if (mode == "enter") {
        console.log("Appending rectangles.")
        g.svg.selectAll("rect")
            .data(d)
            .enter()
            .append("rect")
            .attr("y", (d) => { return Math.floor(g.bottom_border - g.y_scale(d.Value)) })
            .attr("width", g.x_scale.bandwidth())
            .attr("height", (d) => { return Math.floor(g.y_scale(d.Value)) })
            .attr("fill", () => { return "#900" })
            .attr("x", (d) => { return g.x_scale(d.Country) + (g.x_scale.bandwidth() * 0.6) })
    } else {
        console.log("Updating rectangles.")
        g.svg.selectAll("rect")
            .data(d)
            .transition()
            .attr("y", (d) => { return Math.floor(g.bottom_border - g.y_scale(d.Value)) })
            .attr("width", g.x_scale.bandwidth())
            .attr("height", (d) => { return Math.floor(g.y_scale(d.Value)) })
            .attr("fill", () => { return "#900" })
            .attr("x", (d) => { return g.x_scale(d.Country) + (g.x_scale.bandwidth() * 0.6) })
    }
}

function append_labels(mode) {

    var d = g.f

    if (mode == "enter") {
        console.log("Appending labels.")
        g.svg.selectAll("text")
            .data(d)
            .enter()
            .append("text")
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "14px")
            .attr("fill", (d) => {
                var y = Math.floor(g.bottom_border - g.y_scale(d.Value)) + 20
                if (y > g.bottom_border - 10) {
                    return "black"
                } else {
                    return "white"
                }
            })
            .attr("x", (d) => { return g.x_scale(d.Country) + (g.x_scale.bandwidth() * 1.1) })
            .attr("y", (d) => {
                var y = Math.floor(g.bottom_border - g.y_scale(d.Value)) + 20
                if (y > g.bottom_border - 10) { y = g.bottom_border - g.y_scale(d.Value) - 10 }
                return Math.round(y)
            })
            .text((d) => { return d.Value.toString() })
    } else {
        console.log("Updating labels.")
        g.svg.selectAll("text")
            .data(d)
            .transition()
            .attr("fill", (d) => {
                var y = Math.floor(g.bottom_border - g.y_scale(d.Value)) + 20
                if (y > g.bottom_border - 10) {
                    return "black"
                } else {
                    return "white"
                }
            })
            .attr("x", (d) => { return g.x_scale(d.Country) + (g.x_scale.bandwidth() * 1.1) })
            .attr("y", (d) => {
                var y = Math.floor(g.bottom_border - g.y_scale(d.Value)) + 20
                if (y > g.bottom_border - 10) { y = g.bottom_border - g.y_scale(d.Value) - 10 }
                return Math.round(y)
            })
            .text((d) => { return d.Value.toString() })
    }
}

function append_y_axis(mode) {

    var d = g.f

    var min_y = d3.min(d, (d) => { return d.Value })
    var max_y = d3.max(d, (d) => { return d.Value })

    var y_axis_scale = d3.scaleLinear()
        .domain([min_y, max_y])
        .range([g.bottom_border, g.top_border])
        .nice()

    var y_axis = d3.axisLeft().scale(y_axis_scale)

    if (mode == "enter") {
        console.log("Appending y_axis.")
        g.svg.append("g")
            .attr("id", "y_axis")
            .attr("class", "axis")
            .attr("transform", "translate(" + g.left_border.toString() + ",0)")
            .call(y_axis)
    } else {
        console.log("Updating y_axis.")
        g.svg.select("#y_axis")
            .transition()
            .attr("transform", "translate(" + g.left_border.toString() + ",0)")
            .call(y_axis)
    }
}

function append_x_axis(mode) {

    var x_axis = d3.axisBottom().scale(g.x_scale)

    if (mode == "enter") {
        console.log("Appending x_axis.")
        g.svg.append("g")
            .attr("id", "x_axis")
            .attr("class", "axis")
            .attr("transform", "translate(" + g.left_border + ", " + g.bottom_border + ")")
            .call(x_axis)
    } else {
        console.log("Updating x_axis.")
        g.svg.select("#x_axis")
            .transition()
            .attr("transform", "translate(" + g.left_border + ", " + g.bottom_border + ")")
            .call(x_axis)
    }
}

function filter_d() {

    console.log('Filtering data for "' + g.year + '", "' + g.series + '", "' + g.order + '".')

    var d = g.d
    var f = []

    for (var i = 0; i < d.length; i++) {
        if (d[i].Year == g.year && d[i].Series == g.series) {
            f.push(d[i])
        }
    }

    // Sort the filtered data.
    f.sort((a, b) => {

        if (g.order == "Country") {

            console.log("Sorting by Country Name.")

            const a_country = a.Country
            const b_country = b.Country

            comparison = 0

            if (a_country > b_country) {
                comparison = 1
            } else if (a_country < b_country) {
                comparison = -1
            }

            return comparison
        } else if (g.order == "Ascending") {

            console.log("Sorting by Ascending Value")

            const a_value = a.Value
            const b_value = b.Value

            comparison = 0

            if (a_value > b_value) {
                comparison = 1
            } else if (a_value < b_value) {
                comparison = -1
            }

            return comparison
        }
        else if (g.order == "Descending") {

            console.log("Sorting by Descending Value")

            const a_value = a.Value
            const b_value = b.Value

            comparison = 0

            if (a_value > b_value) {
                comparison = -11
            } else if (a_value < b_value) {
                comparison = 1
            }

            return comparison
        } else {
            console.log("Sort order not recognized.")
        }
    })

    g.f = f
}

function update_chart() {

    console.log("Updating chart.")

    // Set default values.
    g.year = "2016"
    g.series = "production"
    g.order = "Country"

    // Get the selected year group.
    var selected_year_group = document.getElementsByName("selected_year")

    // Find the selected component in the group
    for (var i = 0; i < selected_year_group.length; i++) {
        if (selected_year_group[i].checked) {
            g.year = selected_year_group[i].value
            break;
        }
    }

    // Get the selected series group.
    var selected_series_group = document.getElementsByName("selected_series")

    // Find the selected component in the group.
    for (var i = 0; i < selected_series_group.length; i++) {
        if (selected_series_group[i].checked) {
            g.series = selected_series_group[i].value
            break;
        }
    }

    // Get the selected order group.
    var selected_order_group = document.getElementsByName("selected_order")

    // Find the selected component in the group
    for (var i = 0; i < selected_order_group.length; i++) {
        if (selected_order_group[i].checked) {
            g.order = selected_order_group[i].value
            break;
        }
    }

    // Set global variable sfor all functions.
    set_global_variables()

    // Make filtered data for selected values available for all functions.
    filter_d()

    // Configure chart with filtered data.
    calculate_x_scale()
    calculate_y_scale()

    // Update svg components with filtered data.
    var mode = "update"
    append_rectangles(mode)
    append_labels(mode)
    append_y_axis(mode)
    append_x_axis(mode)

    // Set the font size for ALL ticks.
    if (g.left_margin > 45) {
        g.svg.selectAll(".tick").attr("font-size", "14")
    } else {
        g.svg.selectAll(".tick").attr("font-size", "10")
    }

}

function convert_d() {

    var f = []

    for (var i = 0; i < g.d.length; i++) {

        // Convert json objects to javascript objects.
        var d = {}
        d.Year = g.d[i]["Year"]
        d.Country = g.d[i]["Country"]
        d.Series = g.d[i]["Series"]
        d.Value = g.d[i]["Value"]

        // Reduce the size of the Series string.
        if (d.Series.includes("production")) { d.Series = "Production" }
        else if (d.Series.includes("imports")) { d.Series = "Imports" }
        else if (d.Series.includes("stocks")) { d.Series = "Stocks" }
        else if (d.Series.includes("supply")) { d.Series = "Supply" }
        else if (d.Series.includes("per capita")) { d.Series = "Per Capita" }
        else {
            console.log("Series Rename Rejected:  " + d.Series)
            continue
        }

        // Filter Country.
        if (d.Country.includes("South")) { continue }
        if (d.Country.includes("Guyana")) { continue }
        if (d.Country.includes("Suriname")) { continue }

        // Shorten Country.
        if (d.Country.includes("Bolivia")) { d.Country = "Bolivia" }
        if (d.Country.includes("Venezuela")) { d.Country = "Venezuela" }

        // Convert Value to type integer.
        d.Value = d.Value.replace(",", "")
        d.Value = parseInt(d.Value)

        // Create a javascript object 
        var x = {
            "Year": d.Year,
            "Country": d.Country,
            "Series": d.Series,
            "Value": d.Value
        }

        // Collect the converted javascript objects.
        f.push(x)
    }
    // Replace global data with the collection of converted javascript objects.
    g.d = f
}

function initialize_chart() {

    console.log("Initializing chart.")

    // Create a promise object from the csv file.
    console.log("About to call d3.json().")

    url_for_data = "../data.json"

    // d3.json(url_for_data, converter)
    d3.json(url_for_data)
        .then((d) => {

            console.log("Original d.length:  " + d.length)
            console.log("stingify:")
            console.log(JSON.stringify(d))

            // Make all data available to all functions.
            g.d = d;

            // Convert data.
            convert_d()
            console.log("d.length after convert_d:  " + d.length)

            // Set global variable sfor all functions.
            set_global_variables()

            // Make filtered data for default values available for all functions.
            g.year = "2016"
            g.series = "Production"
            g.order = "Country"
            filter_d()

            // Build chart with filtered data.
            append_svg()
            calculate_x_scale()
            calculate_y_scale()

            // Append components to an empty svg.
            var mode = "enter"
            append_rectangles(mode)
            append_labels(mode)
            append_y_axis(mode)
            append_x_axis(mode)

            // Set the font size for ALL ticks.
            if (g.left_margin > 45) {
                g.svg.selectAll(".tick").attr("font-size", "14")
            } else {
                g.svg.selectAll(".tick").attr("font-size", "10")
            }
        
            // Update (redraw) the chart when the window is resized.
            window.addEventListener('resize', update_chart)

        })
        .catch(console.log.bind(console))
}


