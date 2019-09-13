
// Variables for the Global Execution Context.
const fs = require("fs")
const csv = require("csv-parser")
const { Client } = require("pg")
const path = "C:/metrobike/csv/trips"

// It is better to load locally and export/import to AWS/RDS database.
if (false) {
    config = {
        host: 'postgres.cx7bhejrlrq0.us-east-2.rds.amazonaws.com',
        port: 5432,
        user: 'xxxxxxxx',
        password: 'xxxxxxxx',
        database: 'xxxxxxxx'
    }
} else {
    config = {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'welcome',
        database: 'postgres'
    }

}

// Declare and initialize the database client.
var client = new Client(config)

// Declare and initialize the counter used in tracking progress.
var active_transactions = 0

// The database connection starts the Main processing.
client.connect((err) => {

    if (err) {

        // Track is there was an error in the database connection.
        process.stdout.write("\n\n Error in acquiring a database connection:  " + err.stack)
        return
    }

    // Start updating the database with rows from csv files.
    update_database()

    // Track the end of the Main process.
    process.stdout.write("\n\n Main completed.")
})

// Get an array of file names from the directory.
function update_database() {

    // Read the directory given by the global variable 'path'.
    fs.readdir(path, (err, file_names) => {

        if (err) {

            // Track the read error.
            process.stdout.write("\n\n fs.readdir threw an error:  " + err.stack + "\n")
            throw err
        }

        // Process the array of file names.
        process_files(file_names)

        // Track the end of the database update.
        process.stdout.write("\n\n update_database() completed.")
    })
}

// Process files returned by reading the directory.
function process_files(file_names) {

    // Process each file in the array of files.
    file_names.forEach(process_file)
}

// Process a file.
function process_file(file_name, index) {

    // Format the file path.
    var file_path = path + "/" + file_name

    // Track the file being processed.
    process.stdout.write("\n\n file_path:  " + file_path)

    // Read the file, parse the file as a csv file, and process each row.
    fs.createReadStream(file_path)
        .pipe(csv())
        .on('data', (row) => {
            process_row(row)
        })
        .on('end', () => {

            // Track the end of processing of a file.
            process.stdout.write("\n\n Successfully processed " + file_name + ".\n")
        })
}

// Process each row in a file.
function process_row(row) {

    // Increment counter for active transactions.
    active_transactions++

    // Track active transactions to report on progress.
    if (active_transactions % 10000 == 0) {
        process.stdout.write("\n\n active_transactions:  " + active_transactions)
    }

    // Validate Trip ID
    var trip_id = parseInt(row.trip_id)
    if (Number.isNaN(trip_id)) {
        process.stdout.write("\n\n trip was converted from " + row.trip_id + " to 0.")
        trip_id = 0
    } else {
        if (!Number.isInteger(trip_id)) {
            process.stdout.write("\n\n trip was converted from " + row.trip_id + " to 0.")
            trip_id = 0
        }
    }
    trip_id = BigInt(trip_id)

    // Validate Duration.
    var duration = parseInt(row.duration)
    if (Number.isNaN(duration)) {
        process.stdout.write("\n\n duration was converted from " + row.duration + " to 0.")
        duration = 0
    } else {
        if (!Number.isInteger(duration)) {
            process.stdout("\n\n duration was converted from " + row.duration + " to 0.")
            duration = 0
        }
    }

    // Validate Start Time
    var start_time = reformat_time('start_time', row.start_time)

    // Validate End Time
    var end_time = reformat_time('end_time', row.end_time)

    // Validate Start Station ID
    var start_station_id = parseInt(row.start_station_id)
    if (Number.isNaN(start_station_id)) {
        process.stdout.write("\n\n start_station_id was converted from '" + row.start_station_id + "' to 0.")
        start_station_id = 0
    } else {
        if (!Number.isInteger(start_station_id)) {
            process.stdout.write("\n\n start_station_id was converted from '" + row.start_station_id + "' to 0.")
            start_station_id = 0
        }
    }

    // Validate Start Latitude
    var start_lat = parseFloat(row.start_lat)
    if (Number.isNaN(start_lat)) {
        process.stdout.write("\n\n start_lat was converted from '" + row.start_lat + "' to 0.0")
        start_lat = 0.0
    }

    // Validate Start Longitude
    var start_lon = parseFloat(row.start_lon)
    if (Number.isNaN(start_lon)) {
        process.stdout.write("\n\n start_lon was converted from '" + row.start_lon + "' to 0.0")
        start_lon = 0.0
    }

    // Validate End Station ID
    var end_station_id = parseInt(row.end_station_id)
    if (Number.isNaN(end_station_id)) {
        process.stdout.write("\n\n end_station_id was converted from '" + row.end_station_id + "' to 0.")
        end_station_id = 0
    } else {
        if (!Number.isInteger(end_station_id)) {
            process.stdout.write("\n\n end_station_id was converted from '" + row.end_station_id + "' to 0.")
            end_station_id = 0
        }
    }

    // Validate End Latitude
    var end_lat = parseFloat(row.end_lat)
    if (Number.isNaN(end_lat)) {
        process.stdout.write("\n\n end_lat was converted from '" + row.end_lat + "' to 0.0")
        end_lat = 0.0
    }

    // Validate End Longitude
    var end_lon = parseFloat(row.end_lon)
    if (Number.isNaN(end_lon)) {
        process.stdout.write("\n\n end_lon was converted from '" + row.end_lon + "' to 0.0")
        end_lon = 0.0
    }

    // Validate Bike ID.
    var bike_id = parseInt(row.bike_id)
    if (Number.isNaN(bike_id)) {
        process.stdout.write("\n\n bike_id was converted from '" + row.bike_id + "' to 0.")
        bike_id = 0
    } else {
        if (!Number.isInteger(bike_id)) {
            process.stdout("\n\n bike_id was converted from '" + row.bike_id + "' to 0.")
            bike_id = 0
        }
    }

    // Validate Plan Duration.
    var plan_duration = parseInt(row.plan_duration)
    if (Number.isNaN(plan_duration)) {
        process.stdout.write("\n\n plan_duration was converted from '" + row.plan_duration + "' to 0.")
        plan_duration = 0
    } else {
        if (!Number.isInteger(plan_duration)) {
            process.stdout("\n\n plan_duration was converted from '" + row.plan_duration + "' to 0.")
            plan_duration = 0
        }
    }

    // Build a row to be inserted into Postgres table metrobike.trips.
    var r = [trip_id, duration, start_time, end_time, start_station_id, start_lat, start_lon, end_station_id, end_lat, end_lon, bike_id]
    r = r.concat([plan_duration, row.trip_route_category, row.passholder_type])

    // Build a query that will instert the row.
    var s = "insert into metrobike.trips "
    s = s + "(trip_id, duration, start_time, end_time, "
    s = s + "start_station_id, start_lat, start_lon, "
    s = s + "end_station_id, end_lat, end_lon, "
    s = s + "bike_id, plan_duration, trip_route_category, passholder_type) "
    s = s + "values "
    s = s + "($1::bigint, $2::integer, $3::timestamp without time zone, $4::timestamp without time zone, "
    s = s + "$5::integer, $6::double precision, $7:: double precision, "
    s = s + "$8::integer, $9::double precision, $10:: double precision, "
    s = s + "$11::integer, $12::integer, $13::character varying, $14::character varying)"
    s = s + "on conflict do nothing"

    // Execute the query that will insert the row.
    client.query(s, r, (err, res) => {

        if (err) {

            // Track unsuccessful queries.
            process.stdout.write("\n\n" + --active_transactions + " Error:  " + r)
            process.stdout.write("\n\n insert failed:  " + err)
        }

        if (res) {

            --active_transactions

            if (active_transactions % 10000 == 0) {

                // Track progress by displaying active transactions.
                process.stdout.write("\n\n " + active_transactions + " Insert:  " + r)
            }

            // Release database resources after each insert.
            client.query('COMMIT', (err) => {

                if (err) {

                    // Track an error with the commit.
                    process.stdout.write("\n\n Error committing transaction:  ", err)
                }

            })

            // Track the end of the processing.
            if (active_transactions < 1) {
                process.stdout.write("\n\n All done.  active_transactions:  " + active_transactions)
            }
        }
    })
}

// Reformat time if necessary.
function reformat_time(field_name, time_string) {

    // Remove leading and trailing whitespace.
    var s = time_string.trim()

    // Prepare the log statement.
    // t = "\n\n " + field_name + " was coverted from " + s + " to "

    var first_slash = s.indexOf("/")
    var second_slash = s.lastIndexOf("/")
    var space_character = s.indexOf(" ", second_slash)
    var colon_character = s.indexOf(":", space_character)
    var last_character = s.length

    // Test if the string is in MM/DD/YYYY hh:mm format.
    if (first_slash !== -1 && second_slash !== -1 && colon_character !== -1) {

        // Get date and time segments.
        var year_segment = s.slice(second_slash + 1, space_character)
        var month_segment = s.slice(0, first_slash)
        var day_segment = s.slice(first_slash + 1, second_slash)
        var hour_segment = s.slice(space_character + 1, colon_character)
        var minute_segment = s.slice(colon_character + 1, last_character)

        // Make date and time segments have the proper length
        if (month_segment.length === 1) { month_segment = "0" + month_segment }
        if (day_segment.length === 1) { day_segment = "0" + day_segment }
        if (hour_segment.length === 1) { hour_segment = "0" + hour_segment }
        if (minute_segment.length === 1) { minute_segment = "0" + minute_segment }

        // Construct the new date and time.
        var s = year_segment + "-" + month_segment + "-" + day_segment + " "
        s = s + hour_segment + ":" + minute_segment + ":00"

        // Log the change.
        // t = t + s + "."
        // process.stdout.write(t)      Removed because of too many displays.

        // Return the formatted date and time.
        return s

    } else {

        // Return a trimmed date and time.
        return s
    }
}








