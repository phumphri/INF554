function sae_hidden_or_visible(row_id) {

    // Get references to all of the rows.
    var assignment = document.getElementById("assignment")
    var iframe = document.getElementById("iframe")

    // Hide all rows.
    assignment.className = "row hidden"
    iframe.className = "row hidden"

    // Unhide the selected row.
    switch (row_id) {
        case "assignment":
            assignment.className = "row visible"
            break
        case "summary":
            document.getElementById("iframe").src = "/Project/static/html/summary.html"
            iframe.className = "row visible"
            break
        case "trips":
            document.getElementById("iframe").src = "/Project/static/html/trips.html"
            iframe.className = "row visible"
            break
        case "riders":
            document.getElementById("iframe").src = "/Project/static/html/riders.html"
            iframe.className = "row visible"
            break
        case "stations":
            document.getElementById("iframe").src = "/Project/static/html/stations.html"
            iframe.className = "row visible"
            break
        case "bikes":
            document.getElementById("iframe").src = "/Project/static/html/bikes.html"
            iframe.className = "row visible"
            break
        case "media":
            document.getElementById("iframe").src = "/Project/static/html/media.html"
            iframe.className = "row visible"
            break
        default:
            assignment.className = "row visible"
            break
    }
}