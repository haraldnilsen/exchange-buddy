DROP TABLE IF EXISTS userr CASCADE;
DROP TABLE IF EXISTS roompost CASCADE;
DROP TABLE IF EXISTS userpost CASCADE;

CREATE TABLE userr
(
	mobile VARCHAR PRIMARY KEY,
	fname VARCHAR,
	lname VARCHAR,
	fdate VARCHAR,
	profilepic VARCHAR,
	sex VARCHAR,
	salt VARCHAR,
	password VARCHAR
);

CREATE TABLE roompost
(
	rpostid SERIAL PRIMARY KEY,
	address VARCHAR,
	term VARCHAR,
	city VARCHAR,
	country VARCHAR,
	active BOOL,
	roomates VARCHAR,
	bio VARCHAR,
	wifi BOOL,
	appliances BOOL,
	mobile VARCHAR NOT NULL,
	price VARCHAR,
	kvm VARCHAR,
	picture VARCHAR,
	
	FOREIGN KEY (mobile) REFERENCES userr(mobile)
);

CREATE TABLE userpost
(
	upostid SERIAL PRIMARY KEY,
	term VARCHAR,
	city VARCHAR,
	country VARCHAR,
	active BOOL,
	bio VARCHAR,
	minPrice VARCHAR,
	maxPrice VARCHAR,
	mobile VARCHAR NOT NULL,
	
	FOREIGN KEY (mobile) REFERENCES userr(mobile)
);





	
