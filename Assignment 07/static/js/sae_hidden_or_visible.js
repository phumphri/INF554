function sae_hidden_or_visible(row_id) {

    // Get references to all of the rows.
    var assignment = document.getElementById("assignment")
    var bar_chart = document.getElementById("bar_chart")

    // Hide all rows.
    assignment.className = "row hidden"
    bar_chart.className = "row hidden"

    // Unhide the selected row.
    switch (row_id) {
        case "assignment":
            assignment.className = "row visible"
            break
        case "bar_chart":
            bar_chart.className = "row visible"
            break
        default:
            assignment.className = "row visible"
            bar_chart.className = "row visible"
            break
    }
}