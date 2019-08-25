console.log("data_loader was constructed.")

// Global variable available for all functions.
g = {
    metadata: [],
    data: []
    
}

function main() {

    metadata = []

    console.log("load_metadata was called.")

    url_for_metadata = "/Assignment%2004/static/csv/metadata.csv"

    // Select the metadata for the first twenty countries.
    d3.csv(url_for_metadata)
        .then((d) => {
            for (var i = 0; i < d.length; i++) {
                var row = {
                    code: d[i]["Country Code"],
                    name: d[i]["Country Name"],
                    region: d[i]["Region"],
                    income: d[i]["Income Group"]
                }
                g.metadata.push(row)
                if (g.metadata.length > 19) {
                    break
                }
            }
            // Load data for all countries to be joined with metadata later.
            load_data()
        }).catch(console.log.bind(console))
}

function load_data() {

    data = []

    console.log("load_data was called.")

    url_for_metadata = "/Assignment%2004/static/csv/data.csv"

    d3.csv(url_for_metadata)
        .then((d) => {
            for (var i = 0; i < d.length; i++) {
                var row = {
                    code: d[i]["Country Code"],
                    value: d[i]["2018"]
                }
                g.data.push(row)
            }
            console.log("metadata.length:  " + g.metadata.length)
            console.log("data.length:  " + g.data.length)
            console.log("Let's start consturction!")
            build_html_table()
            build_bar_chart()
            build_scatterplot_chart()
            build_bubble_chart()
        }).catch(console.log.bind(console))
}

