const http = require("http");
const express = require( "express");
const WebSocket = require( "ws");
const o = require('./client/output/Account_pb')


const app = express();
// app.use(cors)
const server = http.createServer(app);

const webSocketServer = new WebSocket.Server({ server });

webSocketServer.on('connection', ws => {
    ws.on('message', m => {
        const g = new Uint8Array(m);
        const data = o.Account.deserializeBinary(g)
        console.log(data.getName());
        console.log(data.getId());
        console.log(data.getIsnew());
        console.log(data.getDatetime());

        const d = {
            name: data.getName(),
            id: data.getId(),
            isNew: data.getIsnew(),
            datetime: data.getDatetime()
        }
        
        var account = new o.Account;
        account.setName(data.name),
        account.setId(data.id),
        account.setDatetime(data.datetime),
        account.setIsnew(data.isnew)
        var s = account.serializeBinary();
        ws.send(s)
        // webSocketServer.clients.forEach(client => client.send(m.toString()));
   });

   ws.on("error", e => ws.send(e));

   ws.send('Hi there, I am a WebSocket server');
});

server.listen(8999, () => console.log("Server started"))