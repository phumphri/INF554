
// Variables for the Global Execution Context.
const fs = require("fs")
const csv = require("csv-parser")
const { Client } = require("pg")
var config = {}
const path = "C:/metrobike/csv/stations"

// Main
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
var client = new Client(config)
var active_transactions = 0


client.connect((err) => {

    if (err) {
        process.stdout.write("\n error acquiring client:  " + err.stack + "\n")
        return
    }

    process.stdout.write("\n connected \n")

    update_database()

    process.stdout.write("\n Main completed \n")
})

// Get a list of files from the directory.
function update_database() {

    fs.readdir(path, (err, file_names) => {

        if (err) {
            process.stdout.write("\nfs.readdir threw an error:  " + err.stack + "\n")
            throw err
        }

        process_files(file_names)

        process.stdout.write("\n update_database() completed \n")
    })
}

// Process each file in the list of files.
function process_files(file_names) {

    file_names.forEach(process_file)

    process.stdout.write("\n process_files() completed \n")
}

// Process a file.
function process_file(file_name, index) {

    var file_path = path + "/" + file_name

    fs.createReadStream(file_path)
        .pipe(csv())
        .on('data', (row) => {
            process_row(row)
        })
        .on('end', () => {
            process.stdout.write("\n Successfully processed " + file_name + ".\n")
        })
}

// Process each row in a file.
function process_row(row) {



    process.stdout.write('\n\nInput:  ' + Object.values(row))

    active_transactions++

    var r = [row.Station_ID, row.Station_Name]
    r = r.concat([reformat_Go_live_date(row.Go_live_date), row["Region "], row.Status])

    var s = "insert into metrobike.stations "
    s = s + "(station_id, station_name, go_live_date, region, status) "
    s = s + "values ($1::integer, $2::character varying, "
    s = s + "$3::timestamp without time zone, $4::character varying, "
    s = s + "$5::character varying) on conflict do nothing"


    client.query(s, r, (err, res) => {

        if (err) {
            process.stdout.write("\n\n" + --active_transactions + " Error:  " + r)
            process.stdout.write("\n\n insert failed:  " + err)
        }

        if (res) {
            process.stdout.write("\n\n" + --active_transactions + " Insert:  " + r)

            client.query('COMMIT', (err) => {

                if (err) {
                    process.stdout.write("\n\n Error committing transaction:  ", err)
                }
            })
        }
    })
}

// Reformat time if necessary.
function reformat_Go_live_date(Go_live_date) {

    var s = Go_live_date.trim()

    var first_slash = s.indexOf("/")
    var second_slash = s.lastIndexOf("/")
    var last_character = s.length

    if (first_slash !== -1 && second_slash !== -1) {

        // Get date and time segments.
        var year_segment = s.slice(second_slash + 1, last_character)
        var month_segment = s.slice(0, first_slash)
        var day_segment = s.slice(first_slash + 1, second_slash)

        // Make date and time segments have the proper length
        if (month_segment.length === 1) { month_segment = "0" + month_segment }
        if (day_segment.length === 1) { day_segment = "0" + day_segment }

        // Construct the new date and time.
        var s = year_segment + "-" + month_segment + "-" + day_segment

        // Return the new date and time.
        return s

    } else {

        // Return a trimmed date and time.
        return s
    }


}







