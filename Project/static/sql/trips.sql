-- Table: metrobike.trips

-- DROP TABLE metrobike.trips;

CREATE TABLE metrobike.trips
(
    trip_id bigint NOT NULL,
    duration integer NOT NULL,
    start_time timestamp without time zone NOT NULL,
    end_time timestamp without time zone NOT NULL,
    start_station_id integer NOT NULL,
    start_lat double precision NOT NULL,
    start_lon double precision NOT NULL,
    end_station_id integer NOT NULL,
    end_lat double precision NOT NULL,
    end_lon double precision NOT NULL,
    bike_id integer NOT NULL,
    plan_duration integer NOT NULL,
    trip_route_category character varying(32) COLLATE pg_catalog."default" NOT NULL,
    passholder_type character varying(32) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT trips_pkey PRIMARY KEY (trip_id),
    CONSTRAINT end_station_id FOREIGN KEY (end_station_id)
        REFERENCES metrobike.stations (station_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT start_station_id FOREIGN KEY (start_station_id)
        REFERENCES metrobike.stations (station_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE metrobike.trips
    OWNER to postgres;

GRANT ALL ON TABLE metrobike.trips TO postgres;

GRANT SELECT ON TABLE metrobike.trips TO PUBLIC;

-- Index: fki_end_station

-- DROP INDEX metrobike.fki_end_station;

CREATE INDEX fki_end_station
    ON metrobike.trips USING btree
    (end_station_id)
    TABLESPACE pg_default;

-- Index: fki_start_station

-- DROP INDEX metrobike.fki_start_station;

CREATE INDEX fki_start_station
    ON metrobike.trips USING btree
    (start_station_id)
    TABLESPACE pg_default;