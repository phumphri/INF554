
// Variables for the Global Execution Context.
var fs = require("fs")
const path = require("path")


// It is better to load locally and export/import to AWS/RDS database.
if (false) {
    config = {
        host: 'postgres.cx7bhejrlrq0.us-east-2.rds.amazonaws.com',
        port: 5432,
        user: 'postgres',
        password: 'postgres',
        database: 'postgres'
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


// Build a query that will select rows as json objects.
var s = "select row_to_json(trips_by_year_month) as json_objects from ( "
s = s + "    select year, month, sum(trip) as trips "
s = s + "    from ( "
s = s + "        select extract(year from start_time)::integer as year, "
s = s + "               extract(month from start_time)::integer as month, "
s = s + "               1 as trip "
s = s + "        from metrobike.trips ) as trip_by_year_month "
s = s + "    group by year, month "
s = s + "    order by year, month "
s = s + ") as trips_by_year_month "

// Execute the query that will select the rows.
var { Client } = require("pg")
var client = new Client(config)
client
    .connect()
    .then(() => process.stdout.write("connected"))
    .catch(e => process.stdout.write("error:  " + err.stack))

client.query(s, (err, res) => {
    if (err) {
        process.stdout.write("\n\n query error:  " + err.stack)
    }

    if (res) {
        process.stdout.write("\n\n successful query")
        process_response(res)
    }

    client.end()
    process.stdout.write("\n\n client.end()")
})

function process_response(res) {

    // Get the target file name relative to the current directory.
    var file_name = path.join(process.cwd(), '/Project/static/json/trips_by_year_month.json')

    // Start the JSON file as an array.
    try {

        fs.writeFileSync(file_name, "[ \n")

        process.stdout.write("\n\n Successful write of [.")

    } catch (err) {

        process.stdout.write("\n\n First writeFileSync err:  " + err.stack)

    }

    // For all the rows returned, write to the target file.
    for (var i = 0; i < res.rows.length; i++) {

        // Get the json object from the current row that was returned.
        json_objects = res.rows[i].json_objects

        // Convert the json object to a string.
        var json_row = JSON.stringify(json_objects)

        // Process the row.
        if (i < res.rows.length - 1) {

            // Add a comma and newline character to all but the last json row.
            json_row = json_row + ", \n"

            // Add the json row to the array in the file.
            try {
                fs.appendFileSync(file_name, json_row)

                process.stdout.write("\n\n Successful append json_row:  " + json_row)

            } catch (err) {

                process.stdout.write("\n\n appendFileSync err:  " + err.stack)
            }

        } else {

            // Do not write a comma after the the last json row.
            json_row = json_row + " \n"

            // Write the last json row.
            try {

                fs.appendFileSync(file_name, json_row)

                process.stdout.write("\n\n Successful append json_row:  " + json_row)

            } catch (err) {

                process.stdout.write("\n\n writeFile err:  " + err.stack)

            }

            // End the array in the json file with the closing bracket.
            try {

                fs.appendFileSync(file_name, "]")

                process.stdout.write("\n\n Successful append of ].")

            } catch (err) {

                process.stdout.write("\n\n Last appendFile err:  " + err.stack)
            }
        }

        process.stdout.write("\n\n Exit process_response")
    }

}



