-- Files provided by MetroBike had duration as minutes and sometimes as seconds.
-- This update sets them all to minutes.
update metrobike.trips set duration = EXTRACT(minutes FROM (end_time - start_time)::integer)