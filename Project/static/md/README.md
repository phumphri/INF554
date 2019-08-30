

```python
# Project
```

## Data Acquisition
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


## Metadata
<p>Provided by MetroBike<p>
<h4>Trips Data Format</h4>
<p>
Each <code>csv</code> file contains data for one quarter of the year. 
Each file contains the following data points:
</p>
<ul>
    <li><b style="color:#990000;">trip_id:</b> Locally unique integer that identifies the trip</li>
    <li><b style="color:#990000;">duration:</b> Length of trip in minutes</li>
    <li><b style="color:#990000;">start_time:</b> The date/time when the trip began, presented in ISO 8601 format in local time</li>
    <li><b style="color:#990000;">end_time:</b> The date/time when the trip ended, presented in ISO 8601 format in local time</li>
    <li><b style="color:#990000;">start_station:</b> The station ID where the trip originated (for station name and more information on each station see the Station Table)</li>
    <li><b style="color:#990000;">start_lat:</b> The latitude of the station where the trip originated</li>
    <li><b style="color:#990000;">start_lon:</b> The longitude of the station where the trip originated</li>
    <li><b style="color:#990000;">end_station:</b> The station ID where the trip terminated (for station name and more information on each station see the Station Table)</li>
    <li><b style="color:#990000;">end_lat:</b> The latitude of the station where the trip terminated</li>
    <li><b style="color:#990000;">end_lon:</b> The longitude of the station where the trip terminated</li>
    <li><b style="color:#990000;">bike_id:</b>  Locally unique integer that identifies the bike</li>
    <li><b style="color:#990000;">plan_duration:</b> The number of days that the plan the passholder is using entitles them to ride; 0 is used for a single ride plan (Walk-up)</li>
    <li><b style="color:#990000;">trip_route_category:</b> "Round Trip" for trips starting and ending at the same station or "One Way" for all other trips</li>
    <li><b style="color:#990000;">passholder_type:</b> The name of the passholder's plan</li>
    <li><b style="color:#990000;">bike_type:</b> The kind of bike used on the trip, including standard pedal-powered bikes, electric assist bikes, or smart bikes.</li>
</ul>        

<h4>Data Processing</h4>
<p>Data will be cleansed prior to publication according to the following criteria:<p>
<ul>
    <li>Staff servicing and test trips are removed.</li>
    <li>Trips below 1 minute are removed.</li>
    <li>A "Virtual Station" listed in the checkout and return kiosks, is used by staff to check in or check out a bike remotely for a special event or in a situation in which a bike could not otherwise be checked in or out to a station.</li>
    <li>Trip lengths are capped at 24 hours.</li>
    <li>Some short round trips or long trips may be the result of system or user error, but have been kept in the dataset for completeness.</li>
<ul>    

<h4>Station Data Format</h4>
<ul>
<li><b style="color:#990000;">Station ID:</b> Unique integer that identifies the station (this is the same ID used in the Trips and Station Status data)</li>
<li><b style="color:#990000;">Station Name:</b> The public name of the station. "Virtual Station" is used by staff to check in or check out a bike remotely for a special event or in a situation in which a bike could not otherwise be checked in or out to a station.</li>
<li><b style="color:#990000;">Go live date:</b> The date that the station was first available</li>
<li><b style="color:#990000;">Region:</b> The municipality or area where a station is located, includes DTLA (Downtown LA), Pasadena, Port of LA, Venice</li>
<li><b style="color:#990000;">Status:</b> "Active" for stations available or "Inactive" for stations that are not available as of the latest update</li>
</ul>    

## Data Profile
<p>MetroBikeShare_2016_Q3_trips.csv</p>
<p>la_metro_gbfs_trips_Q1_2017.csv</p>
<p>metro-bike-share-trips-2017-q3.csv</p>
<table>
<tr><td>trip_id</td><td>integer</td></tr>
<tr><td>duration</td><td>integer</td></tr>
<tr><td>start_time</td><td>Date Time</td><td>MM/DD/YYYY hh:mm</td><td>Not ISO 8601</td></tr>
<tr><td>end_time</td><td>Date Time</td><td>MM/DD/YYYY  hh:mm</td><td>Not ISO 8601</td></tr>
<tr><td>start_station_id</td><td>integer</td></tr>
<tr><td>start_lat</td><td>float</td></tr>
<tr><td>start_lon</td><td>float</td></tr>
<tr><td>end_station_id</td><td>integer</td></tr>
<tr><td>end_lat</td><td>float</td></tr>
<tr><td>end_lon</td><td>float</td></tr>
<tr><td>bike_id</td><td>integer</td></tr>
<tr><td>plan_duration</td><td>integer</td></tr>
<tr><td>trip_route_category</td><td>string</td><td>no quotation marks</td></tr>
<tr><td>passholder_type</td><td>string</td><td>no quotation marks</td></tr>
</table>





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
<tr><td>trip_id</td><td>integer</td></tr>
<tr><td>duration</td><td>integer</td></tr>
<tr><td>start_time</td><td>string</td><td>quotation marks</td><td>YYYY-MM-DD hh:mm:ss</td></tr>
<tr><td>end_time</td><td>string</td><td>quotation marks</td><td>YYYY-MM-DD hh:mm:ss</td></tr>
<tr><td>start_station</td><td>integer</td></tr>
<tr><td>start_lat</td><td>float</td></tr>
<tr><td>start_lon</td><td>float</td><tr>
<tr><td>end_station</td><td>integer</td></tr>
<tr><td>end_lat</td><td>float</td></tr>
<tr><td>end_lon</td><td>float</td></tr>
<tr><td>bike_id</td><td>string</td><td>quotation marks</td><td>sometimes integer</td></tr>
<tr><td>plan_duration</td><td>integer</td></tr>
<tr><td>trip_route_category</td><td>string</td><td>quotation marks</td></tr>
<tr><td>passholder_type</td><td>string</td><td>quotation marks</td></tr>
</table>
