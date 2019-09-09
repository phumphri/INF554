-- Table: metrobike.stations

-- DROP TABLE metrobike.stations;

CREATE TABLE metrobike.stations
(
    station_id integer NOT NULL,
    station_name character varying(256) COLLATE pg_catalog."default" NOT NULL,
    go_live_date timestamp without time zone NOT NULL,
    region character varying(32) COLLATE pg_catalog."default" NOT NULL,
    status character varying(32) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT stations_pkey PRIMARY KEY (station_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE metrobike.stations
    OWNER to postgres;

grant select on metrobike.stations to public;
