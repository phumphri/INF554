
# INF 554 Assignment 1
Patrick Humphries (7097-1087-72) pvhumphr@usc.edu <br />
INF 554 Data Visualization <br />
Fall 2019

## Assignment
<ul>
    <li>For 10 countries select UN data of your choice containing data over time.</li>
    <li>Import the data in Google Sheets and format the data to create a line chart.</li>
    <li>Create a web page named <code>index.html</code>.</li>
    <li>Add explanations on the dataset and provenance.</li>
    <li>Add link to the Google Sheet file and share it so that <i>anyone</i> at University of Southern California can access it.</li>
    <li>Add two charts to the page:</li>
    <ol>
        <li>The picture of the chart you created in Google Sheets.</li>
        <li>The Google Sheets chart you created embedded using <code>iframe</code>.
    </ol>
    <li>Open <code>index.html</code> in the browser and make sure it works as expected.</li>
    <li>Commit your changes after you implemented a complete step and you test.</li>
</ul>

## Internet
<p>
    Assignment 1 has been published to the Internet hosted by Heroku.
</p>
<p>
    <a href="https://humphries-inf554.herokuapp.com/Assignment%2001/index.html" target="_blank">
        Assignment 1
    </a>
</p>
<p>
In order to avoid the "private" restrictions on repository "INF554/a1-phumphri", all components found
in this repository were copied to a repository with public access.  This will enable the links in
index.html to work.
</p>

## Approach
<p>
    Since the author used armed forces of South America to critique a newpaper infographic, 
    the approach taken was do something similar for energy.
    The energy production, consumption, and net exports were compared for South America.
</p>
<p>
    Instead of creating a "static" chart as required by the assignment, 
    a dynamic chart was created instead.
    This variation was done to add an exploration feature.
    The chart will display a different plot based on a Series that the user selects.
    When opening the Google Sheet, wait for a few seconds until all components are populated.
</p>
<p>
    A Google Sheet was populated with energy data for ten of the twelve sovereign nations 
    of South America.
    The data was projected and selected with the following query:
</p>
<p>
    <code>
        =QUERY('SYB62_T23_201904_Production, Trade and Supply of Energy'!A2:E8295, 
        "select A, C, B, D, E 
        where (A=5)or(A=32)or(A=68)or(A=76)or(A=170)or(A=152)or(A=218)or(A=328)or(A=600)
               or(A=604)or(A=740)or(A=858)or(A=862)")
    </code>
</p>
<p>
    The product of Series (5), Year (8), and Country (10) yields 400 data points
</p>
<p>
    The characters represent columns and the numbers are country codes.
    <ul>
        <li>A: Region/Country/Area</li>
        <li>B: Name</li>
        <li>C: Year</li>
        <li>D: Series</li>
        <li>E: Value</li>
    </ul>
</p>
<p>
    The input for the line chart was from a pivot table generated with the following query:
</p>
<p>
    <code>
        =query('South America'!B2:E517,"select C, sum(E) where (C != 'South America') 
        and (D = '"&B2&"') group by C pivot B")
    </code>
</p>
<p>
    The "Lab 1" specifies that a pivot table be used.
    A pivot table was created with the following code:
</p>
<p>
    <code>
        =query('South America'!B2:E517,"
        select C, sum(E) 
        where (C != 'South America') and (D = '"&B2&"') 
        group by C pivot B")
    </code>
</p>
<p>
    The cell B2 is a validator where the vlookup is populated with unique Series values from 
    the following query:
</p>
<p>
    <code>
        =unique(D2:D517)
    </code>
</p>

## Provenance
<p>
    File "SYB62_T23_201904_Production, Trade and Supply of Energy" was downloaded from
    http://data.un.org.
</p>
<p>
    Using the QUERY function of Google Sheets, data was selected and organized into tables.
</p>
<p>
    The <i>values</i> of these tables were copied to a new Google Sheet.
    This Google sheet was used as the source for the following charts.
    Having this additional sheet with static data improves performance.
</p>
<p>
    This Google Sheet was published to the web with View authority granted to Public.
</p>

## Code
<p>
    <a target="_blank" href="https://github.com/INF554/a1-phumphri/blob/master/index.html">
        index.html
    </a>
</p>

## Data
<p>
    <a target="_blank" 
        href="https://docs.google.com/spreadsheets/d/1CeiVB_u3H8lGjD9KlxkKzsdhivRMPKF0D8XT2qAzt0Y/edit#gid=703773082">
        SA_Energy_Data
    </a>
</p>    <p>
    <a target="_blank" 
        href="https://github.com/phumphri/INF554/blob/master/Assignment%2001/static/csv/South%20America%20Energy%20-%20Pivot.csv">
        South America Energy - Pivot.csv
    </a>
</p>                     

## Image
<p>
    <a target="_blank" 
        href="https://github.com/phumphri/INF554/blob/master/Assignment%2001/static/png/sae.PNG">
        sae.PNG
    </a>
</p>
