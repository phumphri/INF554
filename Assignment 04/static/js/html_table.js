console.log("html_table was constructed.")

function build_html_table() {

    // Create a table with the metadata.
    var d = g.metadata

    var fieldset = d3.select("#html_table_fieldset")

    var table = fieldset.append("table").attr("class", "viterbi_table")

    var thead = table.append("thead")

    // Add column headings.
    var columns = ["Code", "Name", "Region", "Income", "Value"]
    thead.append("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
        .attr("class", "viterbi_th")
        .text((column) => { return column })

    var tbody = table.append("tbody")

    // Add rows with metadata for each country.
    var rows = tbody.selectAll("tr")
        .data(d, (d) => { return d["Code"] })
        .enter()
        .append("tr")

    // Create detail rows from the metadata stored in the rows.
    // For each iteration of d, create an array of four values.
    // From this array, a data field is created for each entry.
    var columns = ["code", "name", "region", "income"]
    rows.selectAll("td")
        .data
        (
            (d) => 
            {
                var r = columns.map
                    (
                        (column) => {return { column: column, value: d[column] }}
                    )
                return r
            },
            (d) => 
            { 
                return d.code 
            }
        )
        .enter()
        .append("td")
        .attr("class", "viterbi_td")
        .html((d) => { return d.value })

    // Switch to data.
    var d = g.data

    // Add column of values to the table from the data table.
    // Do an equijoin on the common column "code".
    rows.data(d, (d) => { return d.code})   
    .append("td")
    .attr("class", "viterbi_td")
    .html((d) => { return d.value })


    
  





    
  

}