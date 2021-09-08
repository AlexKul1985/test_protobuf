const o = require('./output/Account_pb')

// const socket = new WebSocket("ws://localhost:8999");

const myObject = {
    name: "ame ame",
    id: 69420,
    datetime: 1611661486,
    isNew: !1
};

var counter = document.getElementById("counter");
var timer = document.getElementById("timer");
var path = document.getElementById("path");
document.getElementById("send-proto").addEventListener("click", (async function () {
    var start, count = 0, times = counter.value, socket = new WebSocket(path.value);
    socket.onopen = async function (t) {
        // socket.send("proto"),
        // start = Date.now();
        var account = new o.Account;
        account.setName(myObject.name),
        account.setId(myObject.id),
        account.setDatetime(myObject.datetime),
        account.setIsnew(myObject.isNew);
        var s = account.serializeBinary();
        console.log('Send:', s);
        socket.send(s)
    };

    socket.onmessage = async function (i) {
        var g = new Uint8Array(i), u = o.Account.deserializeBinary(g).toObject();
        console.log('Rec:',u);
        // if (count < times) {
        //     var l = new o.Account;
        //     l.setName(u.name),
        //         l.setId(u.id),
        //         l.setDatetime(u.datetime),
        //         l.setIsnew(u.isNew);
        //     var c = l.serializeBinary();
        //     socket.send(c),
        //         count++
        // } else
        //     timer.innerHTML = Date.now() - start + "ms.",
                // socket.close()
    };
}
))

// document.forms.publish.onsubmit = function() {
//     let outgoingMessage = this.message.value;
  
//     socket.send(outgoingMessage);
//     return false;
//   };
  
//   // получение сообщения - отобразить данные в div#messages
//   socket.onmessage = function(event) {
//     let message = event.data;
  
//     let messageElem = document.createElement('div');
//     messageElem.textContent = message;
//     document.getElementById('messages').prepend(messageElem);
//   }
// wsSend({name: 'Alex'})