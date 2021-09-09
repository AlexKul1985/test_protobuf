const http = require("http");
const express = require( "express");
const WebSocket = require( "ws");
const o = require('./client/output/Account_pb')


const app = express();

const server = http.createServer(app);

const webSocketServer = new WebSocket.Server({ server });

const myObject = {
    name: "ame ame",
    id: 69420,
    datetime: 1611661486,
    isNew: !1
};

webSocketServer.on('connection', ws => {
    ws.on('message', m => {
        const g = new Uint8Array(m);
        const data = o.Account.deserializeBinary(g).toObject()
        console.log(data);
        const account = new o.Account;
        account.setName(data.name),
        account.setId(data.id),
        account.setDatetime(data.datetime),
        account.setIsnew(data.isnew)
        const s = account.serializeBinary();
        ws.send(s)
   });

   ws.on("error", e => ws.send(e));
  
});

server.listen(8999, () => console.log("Server started"))