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
            iframe.src = "/Project/static/html/summary.html"
            iframe.className = "embeded-responsive-item visible"
            break
        case "trips":
            iframe.src = "/Project/static/html/trips.html"
            iframe.className = "embeded-responsive-item visible"
            break
        case "riders":
            iframe.src = "/Project/static/html/riders.html"
            iframe.className = "embeded-responsive-item visible"
            break
        case "stations":
            iframe.src = "/Project/static/html/stations.html"
            iframe.className = "embeded-responsive-item visible"
            break
        case "bikes":
            iframe.src = "/Project/static/html/bikes.html"
            iframe.className = "embeded-responsive-item visible"
            break
        case "media":
            iframe.src = "/Project/static/html/media.html"
            iframe.className = "embeded-responsive-item visible"
            break
        default:
            assignment.className = "row visible"
            break
    }
}