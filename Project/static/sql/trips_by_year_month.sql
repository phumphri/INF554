
	select row_to_json(trips_by_year_month) as json_objects from (
		select year, month, sum(trip) as trips
		from ( select 
				extract(year from start_time)::integer as year,
				extract(month from start_time)::integer as month,
				1 as trip
				from metrobike.trips ) as trip_by_year_month
		group by year, month
		order by year, month
	) as trips_by_year_month