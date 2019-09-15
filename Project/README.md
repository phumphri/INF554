
<table>
    <tr style="background:#990000">
        <td><img src="https://vsoeapp1.vsoe.usc.edu/images/USC-Bar-cardinal.gif"></td>
        <td><h1><span style="color:white">Metro Bike Share</span></h1></td>
        <td>
            <span style="color:white">
                University of Southern California<br />
                INF 554:  Information Visualization<br />
                Fall 2019
            </span>
        </td>
    </tr>
</table>
<ul>
    <li>Course:  INF 554:  Information Visualization</li>
    <li>Semester:  Fall 2019</li>
    <li>Section:  32457</li>
    <li>Project:  Metro Bike Share</li>
    <li>Team Members
        <ul>
            <li>Jiaying Huang, B.E.C.S.T</li>
            <ul>
                <li>USC Email:  huangjia@usc.edu
            </ul>
            <li>Ying Cheng</li>
            <ul>
                <li>USC Email:  chen059@usc.edu
            </ul>
            <li>Patrick Humphries, M.B.A.</li>
            <ul>
                <li>USC Email:  pvhumphr@usc.edu
            </ul>
        </ul>
    </li>
</ul>

<h2>Summary</h2>
<p><a href="https://bikeshare.metro.net">Metro Bike Share</a> is a year-round bicycle rental service in the metropolitant Los Angeles area.</p>
<p>This project endeavors to analyze the data provided this enterprise.  It is unknown where this analysis will lead.  However, the analysis starts by visualizing the answers to the following questions:</p>
<ul>
    <li>How many trips have there been?</li>
    <li>What is the trend in the number of trips?</li>
    <li>Are the trips seasonal?</li>
    <li>Trips occur during what time of day?</li>
    <li>What are the kinds of trips?</li>
    <li>What is the number of trips per type of passholder?</li>
    <li>What are the most popular routes?</li>
    <li>What is the typical duration of a trip?</li>
</ul>
<p>Answers to these questions will constitute the first step in the understanding Metro Bike Share.</p>
    


<h3>Proposed Framework</h3>
<p style="color:#990000">Entry 2019-9-15 by Patrick</p>
<p>
    File <code>index.html</code> will use an <code>iframe</code> to display standalone webpages.</p>
<p>
    Each webpage will address a specific topic.  Initial topics are organized by major
    attributes:
</p>
<ul>
    <li>Assignment
        <ul>
            <li>Assignment</li>
            <li>Approach</li>
            <li>Provenance</li>
            <li>Repository</li>
        </ul>
    </li>
    <li>Summary
        <ul>
            <li>Public citations of how MBS was started and its evolution.</li>
            <li>Use timeline visualization to show the major milestones.</li>
        </ul>
    </li>
    <li>Trips
        <ul>
            <li>How many trips have there been?</li>
            <li>What is the trend?</li>
            <li>What is the seasonality?</li>
            <li>Use bar chart for the visualization.</li>
        </ul>
    </li>
    <li>Riders
        <ul>
            <li>How many of each passholder type?</li>
            <li>What is the trend of passholder types?</li>
            <li>Use a streamgraph to show types and numbers.</li>
        </ul>
    </li>
    <li>Stations
        <ul>
            <li>What are the most popular stations?</li>
            <li>What are the most popular routes?</li>
            <li>Use Leaflet to show stations and routes.</li>
        </ul>
    </li>
    <li>Bikes
        <ul>
            <li>What is maximum percentage of bikes in use?</li>
            <li>Will the demand for bikes likely to exceed the number of bikes?</li>
            <li>A timeseries visualization for percentages and a line chart for projection.</li>
        </ul>
    </li>
    <li>Media
        <ul>
            <li>What is the sentiment on Twitter?</li>
            <li>A streamgraph of positive, neutral, negative tweets.</li>
        </ul>
    </li>
</ul>
        

<h2>Data Acquisition</h2>
<p style="color:#990000">Entry 2019-08-29 by Patrick</p>
<p>The following files were downloaded from <code>https://bikeshare.metro.net/about/data/</code><p>
<p>Directory of C:/metrobike/csv/trips/ </p>
<table>
<tr><td>08/29/2019</td><td>10:39 AM</td><td> 4,231,061</td><td>la_metro_gbfs_trips_Q1_2017.csv</td></tr>
<tr><td>08/29/2019</td><td>10:39 AM</td><td> 7,473,254</td><td>la_metro_gbfs_trips_Q2_2017.csv</td></tr>
<tr><td>08/29/2019</td><td>10:40 AM</td><td> 6,200,603</td><td>metro-bike-share-trips-2016-q4.csv</td></tr>
<tr><td>08/29/2019</td><td>10:40 AM</td><td> 8,976,038</td><td>metro-bike-share-trips-2017-q3.csv</td></tr>
<tr><td>08/29/2019</td><td>10:41 AM</td><td>10,047,399</td><td>metro-bike-share-trips-2017-q4-v2.csv</td></tr>
<tr><td>08/29/2019</td><td>10:41 AM</td><td> 9,357,375</td><td>metro-bike-share-trips-2018-q1.csv</td></tr>
<tr><td>08/29/2019</td><td>10:41 AM</td><td>11,067,788</td><td>metro-bike-share-trips-2018-q2.csv</td></tr>
<tr><td>08/29/2019</td><td>10:44 AM</td><td>13,628,706</td><td>metro-bike-share-trips-2018-q3.csv</td></tr>
<tr><td>08/29/2019</td><td>10:44 AM</td><td>11,419,829</td><td>metro-bike-share-trips-2018-q4.csv</td></tr>
<tr><td>08/29/2019</td><td>10:45 AM</td><td> 8,853,818</td><td>metro-bike-share-trips-2019-q1.csv</td></tr>
<tr><td>08/29/2019</td><td>10:45 AM</td><td> 9,910,335</td><td>metro-bike-share-trips-2019-q2.csv</td></tr>
<tr><td>08/29/2019</td><td>10:39 AM</td><td> 6,960,167</td><td>MetroBikeShare_2016_Q3_trips.csv</td></tr>
</table>
<p>Note:  File naming is inconsistent.</p>
<p>Directory of C:/metrobike/csv/stations/ </p>
<table>
<tr><td>08/29/2019</td><td>01:57 PM</td><td>10,708</td><td>metro-bike-share-stations-2019-07-01.csv</td></tr>
</table>    


<h2>Metadata</h2>
<p>Provided by MetroBike<p>
<h4>Trips Data Format</h4>
<p>
Each <code>csv</code> file contains data for one quarter of the year. 
Each file contains the following data points:
</p>
<ul>
    <li><span style="color:#990000"><b>trip_id</b></span>: Locally unique integer that identifies the trip</li>
    <li><span style="color:#990000"><b>duration</b></span>:  Length of trip in minutes</li>
    <li><span style="color:#990000"><b>start_time</b></span>:  The date/time when the trip began, presented in ISO 8601 format in local time</li>
    <li><span style="color:#990000"><b>end_time</b></span>:  The date/time when the trip ended, presented in ISO 8601 format in local time</li>
    <li><span style="color:#990000"><b>start_station</b></span>: The station ID where the trip originated (for station name and more information on each station see the Station Table)</li>
    <li><span style="color:#990000"><b>start_lat</b></span>: The latitude of the station where the trip originated</li>
    <li><span style="color:#990000"><b>start_lon</b></span>: The longitude of the station where the trip originated</li>
    <li><span style="color:#990000"><b>end_station</b></span>: The station ID where the trip terminated (for station name and more information on each station see the Station Table)</li>
    <li><span style="color:#990000"><b>end_lat</b></span>: The latitude of the station where the trip terminated</li>
    <li><span style="color:#990000"><b>end_lon</b></span>: The longitude of the station where the trip terminated</li>
    <li><span style="color:#990000"><b>bike_id</b></span>:  Locally unique integer that identifies the bike</li>
    <li><span style="color:#990000"><b>plan_duration</b></span>: The number of days that the plan the passholder is using entitles them to ride; 0 is used for a single ride plan (Walk-up)</li>
    <li><span style="color:#990000"><b>trip_route_category</b></span>: "Round Trip" for trips starting and ending at the same station or "One Way" for all other trips</li>
    <li><span style="color:#990000"><b>passholder_type</b></span>: The name of the passholder's plan</li>
    <li><span style="color:#990000"><b>bike_type</b></span>: The kind of bike used on the trip, including standard pedal-powered bikes, electric assist bikes, or smart bikes.</li>
</ul>        

<h4>Data Transformation</h4>
<p style="color:#990000">Entry 2019-09-08 by Patrick</p>
<p>Data will be cleansed prior to publication according to the following criteria:<p>
<ul>
    <li><span style="color:#990000"><b>Trip ID</b></span>:  If missing or not type integer, was set to 0.</li>
    <li><span style="color:#990000"><b>Duration</b></span>:  Trips below 1 minute were removed by MetroBike.</li>
    <li><span style="color:#990000"><b>Duration</b></span>:  If missing or not type integer, was set to 0.</li>
    <li><span style="color:#990000"><b>Duration</b></span>:  Since duration was sometimes loaded as seconds instead of minutes, all duration values were recalculated by subtracting start_time from end_time.</li>
    <li><span style="color:#990000"><b>Duration</b></span>:  Trip lengths are capped at 24 hours by MetroBike.</li>
    <li><span style="color:#990000"><b>Duration</b></span>:  Some short round trips or long trips may be the result of system or user error, but have been kept in the dataset for completeness by MetroBike.</li>
    <li><span style="color:#990000"><b>Station ID</b></span>:  A "Virtual Station" (Station ID 3000) listed in the checkout and return kiosks, is used by staff to check in or check out a bike remotely for a special event or in a situation in which a bike could not otherwise be checked in or out to a station.</li>
    <li><span style="color:#990000"><b>Station ID</b></span>:  There is no foreign key constraint to the Stations table.  Some trips have a Station ID not found in the Stations table.  Use left outer join when joining data from the two tables.  This applies to start_station_id and end_station_id</li>
    <li><span style="color:#990000"><b>Station ID</b></span>:  If missing or not type integer, was set to 0.</li>
    <li><span style="color:#990000"><b>Time</b></span>:  If start_time is in format "MM/DD/YYYY hh:mm", it was converted to ISO 8601 format:  YYYY-MM-DD hh:mm:ss.  This applies to start_time and end_time.</li>
    <li><span style="color:#990000"><b>Latitude</b></span>:  If missing or not type float, was set to 0.0.  This applies to start_lat and end_lat.</li>
    <li><span style="color:#990000"><b>Longitude</b></span>:  If missing or not type float, was set to 0.0.  This applies to start_lon and end lon.</li>
    <li><span style="color:#990000"><b>Bike ID</b></span>:  If missing or not type integer, was set to 0.</li>
    <li><span style="color:#990000"><b>Plan Duration</b></span>:  If missing or not type integer, was set to 0.</li>
    <li><span style="color:#990000"><b>Bike Type</b></span>:  This data was not found in any of the <code>csv</code> files that were provided.</li>
</ul>    
<p>For 2016 Q3 through 2019 Q2, the number of rows loaded is 761,689.</p>

<h4>Station Data Format</h4>
<ul>
<li><span style="color:#990000"><b>Station ID</b></span>: Unique integer that identifies the station (this is the same ID used in the Trips and Station Status data)</li>
<li><span style="color:#990000"><b>Station Name</b></span>: The public name of the station. "Virtual Station" is used by staff to check in or check out a bike remotely for a special event or in a situation in which a bike could not otherwise be checked in or out to a station.</li>
<li><span style="color:#990000"><b>Go live date</b></span>: The date that the station was first available</li>
<li><span style="color:#990000"><b>Region</b></span>: The municipality or area where a station is located, includes DTLA (Downtown LA), Pasadena, Port of LA, Venice</li>
<li><span style="color:#990000"><b>Status</b></span>:  "Active" for stations available or "Inactive" for stations that are not available as of the latest update</li>
</ul>  

<h2>Data Profile</h2>
<p style="color:#990000">Entry 2019-08-31 by Patrick</p>
<p>MetroBikeShare_2016_Q3_trips.csv</p>
<p>la_metro_gbfs_trips_Q1_2017.csv</p>
<p>metro-bike-share-trips-2017-q3.csv</p>
<p>la_metro_gbfs_trips_Q2_2017.csv</p>
<p>metro-bike-share-trips-2016-q4.csv</p>
<p>metro-bike-share-trips-2017-q4-v2.csv</p>
<p>metro-bike-share-trips-2018-q1.csv</p>
<p>metro-bike-share-trips-2018-q2.csv</p>
<p>metro-bike-share-trips-2018-q3.csv</p>
<p>metro-bike-share-trips-2018-q4.csv</p>
<p>metro-bike-share-trips-2019-q1.csv</p>
<p>metro-bike-share-trips-2019-q2.csv</p>
<table>
    <tr>
        <th>Attribute</th>
        <th>Type</th>
        <th>Delimiter</th>
        <th>Format</th>
        <th>Database Type</th>
        <th>Database Constraint</th>
    </tr>
    <tr>
        <td>trip_id</td>
        <td>integer</td>
        <td></td>
        <td></td>
        <td>integer</td>
        <td>Not Null, Primary Key</td>
    </tr>
    <tr>
        <td>duration</td>
        <td>integer</td>
        <td></td>
        <td></td>
        <td>integer</td>
        <td>Not Null</td>
    </tr>
    <tr>
        <td>start_time</td>
        <td>text</td>
        <td>sometimes double quotation</td>
        <td>"YYYY-MM-DD hh:mm:ss" or "MM/DD/YYYY hh:mm"</td>
        <td>timestamp without zone</td>
        <td>Not Null</td>
    </tr>
    <tr>
        <td>end_time</td>
        <td>text</td>
        <td>sometimes double quotation</td>
        <td>"YYYY-MM-DD hh:mm:ss" or "MM/DD/YYYY hh:mm"</td>
        <td>timestamp without zone</td>
        <td>Not Null</td>
    </tr>
    <tr>
        <td>start_station_id</td>
        <td>integer</td>
        <td></td>
        <td></td>
        <td>integer</td>
        <td>Not Null, Foreign Key stations.station_id</td>
    </tr>
    <tr>
        <td>start_lat</td>
        <td>float</td>
        <td></td>
        <td></td>
        <td>double precision</td>
        <td>Not Null</td>
    </tr>
    <tr>
        <td>start_lon</td>
        <td>float</td>
        <td></td>
        <td></td>
        <td>double precision</td>
        <td>Not Null</td>
    </tr>
    <tr>
        <td>end_station_id</td>
        <td>integer</td>
        <td></td>
        <td></td>
        <td>integer</td>
        <td>Not Null, Foreign Key stations.station_id</td>
    </tr>
    <tr>
        <td>end_lat</td>
        <td>float</td>
        <td></td>
        <td></td>
        <td>double precision</td>
        <td>Not Null</td>
    </tr>
    <tr>
        <td>end_lon</td>
        <td>float</td>
        <td></td>
        <td></td>
        <td>double precision</td>
        <td>Not Null</td>
    </tr>
    <tr>
        <td>bike_id</td>
        <td>text or integer</td>
        <td>sometimes double quotation marks</td>
        <td></td>
        <td>integer</td>
        <td>Not Null</td>
    </tr>
    <tr>
        <td>plan_duration</td>
        <td>integer</td>
        <td></td>
        <td></td>
        <td>integer</td>
        <td>Not Null</td>
    </tr>
    <tr>
        <td>trip_route_category</td>
        <td>text</td>
        <td>sometimes double quotation marks</td>
        <td></td>
        <td>character varying (32)</td>
        <td>Not Null</td>
    </tr>
    <tr>
        <td>passholder_type</td>
        <td>text</td>
        <td>sometimes double quotation marks</td>
        <td></td>
        <td>character varying (32)</td>
        <td>Not Null</td>
    </tr>
</table>




<p>metro-bike-share-stations-2019-07-01.csv</p>
<table>
    <tr>
        <th>Attribute</th>
        <th>Type</th>
        <th>Delimiter</th>
        <th>Format</th>
        <th>Database Type</th>
        <th>Database Constraint</th>
    </tr>
    <tr>
        <td>Station_ID</td>
        <td>integer</td>
        <td></td>
        <td></td>
        <td>integer</td>
        <td>Not Null, Primary Key</td>
    </tr>
    <tr>
        <td>Station_Name</td>
        <td>text</td>
        <td></td>
        <td></td>
        <td>character variable (256)</td>
        <td>Not Null</td>
    </tr>
    <tr>
        <td>Go_live_date</td>
        <td>text</td>
        <td></td>
        <td>MM/DD/YYYY</td>
        <td>timestamp without zone</td>
        <td>Not Null</td>
    </tr>
    <tr>
        <td>Region</td>
        <td>Text</td>
        <td></td>
        <td></td>
        <td>character varying (32)</td>
        <td>Not Null</td>
    </tr>
    <tr>
        <td>Status</td>
        <td>text</td>
        <td></td>
        <td></td>
        <td>character varying (32)</td>
        <td>Not Null</td>
    </tr>
</table>
<p>Station_ID 3000 is "Virtual Station", change Region from "N/A" to "Virtual Region".</p>
