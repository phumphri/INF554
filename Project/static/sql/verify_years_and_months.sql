

select start_year, start_month, sum(trips) as trips
from (
	select 
		extract(year from start_time) as start_year,
		extract(month from start_time) as start_month,
		1 as trips
	from metrobike.trips) as start_years
group by start_year, start_month
order by start_year, start_month