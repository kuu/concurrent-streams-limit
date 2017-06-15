# concurrent-streams-limit

A website for demo [Concurrent Streams Limit](http://help.ooyala.com/video-platform/concepts/player_v3_concurrent_stream_limits.html) feature

## Prerequisets

Install [Node](https://nodejs.org) and [MongoDB](https://www.mongodb.org).

## Install

```
$ git clone git@github.com:kuu/concurrent-streams-limit.git
$ cd concurrent-streams-limit
$ npm install
$ mkdir data
```

## Configure

Please put config file(s) in your work directory.
```js
 $ mkdir config
 $ vi config/default.json
 {
   "api": {
     "key":        "Your Ooyala API Key",
     "secret":     "Your Ooyala API Secret"
   },
   "player": {
     "id" "Player ID",
     "embedCode": "Asset's embed code"
   },
   "db": {
     "host": "IP address or hostname of DB server",
     "port": "Port number of DB server",
     "name": "DB name"
   }
 }
```

## Run

```
$ npm run db
```

If the default port (27017) is used, use another one by specifying it like:
```
$ npm run db -- --port 27018
```

In a separate console:
```
$ npm start
```
Logs go to ./server.log (stdout) and ./error.log (stderr)

Go to http://localhost:3000 with your browser.
