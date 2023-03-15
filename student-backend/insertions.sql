DROP TABLE IF EXISTS userr CASCADE;
DROP TABLE IF EXISTS roompost CASCADE;
DROP TABLE IF EXISTS userpost CASCADE;

CREATE TABLE userr
(
	mobile VARCHAR PRIMARY KEY,
	fname VARCHAR,
	lname VARCHAR,
	fdate DATE,
	profilepic BYTEA,
	sex VARCHAR,
	salt VARCHAR,
	password VARCHAR
	
);

CREATE TABLE roompost
(
	rpostid SERIAL PRIMARY KEY,
	term VARCHAR,
	city VARCHAR,
	country VARCHAR,
	active BOOL,
	roomates INTEGER,
	bio VARCHAR,
	wifi BOOL,
	appliances BOOL,
	mobile VARCHAR NOT NULL,
	
	FOREIGN KEY (mobile) REFERENCES userr(mobile)
);

CREATE TABLE userpost
(
	upostid VARCHAR PRIMARY KEY,
	term VARCHAR,
	city VARCHAR,
	country VARCHAR,
	active BOOL,
	bio VARCHAR,
	mobile VARCHAR NOT NULL,
	
	FOREIGN KEY (mobile) REFERENCES userr(mobile)
);





	
