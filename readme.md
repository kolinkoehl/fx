License: MINE. not open source.

Run fixerio.js to get exchange rates into Mongo.

Run www file to fire up server

REST Express API runs on /fx

GET only at the moment

GET request pulls the last date stored in the DB

Working on making it so currency job runs automated.

Get FX/EUR would return EUR with a base of USD

You can get a specific currency by doing a GET call on /FX/(currency (3digits))