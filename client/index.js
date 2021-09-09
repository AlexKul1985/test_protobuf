import o from './output/Account_pb';

const path = document.getElementById("path");

const socket = new WebSocket(path.value);

socket.onopen = async function (t) {
    console.log('Соединение установлено!');
};

socket.onmessage = async function (i) {
    const s = await i.data.arrayBuffer()
    const g = new Uint8Array(s);
    const u = o.Account.deserializeBinary(g).toObject();
    console.log('Received:',u);
};

const myObject = {
    name: "ame ame",
    id: 69420,
    datetime: 1611661486,
    isNew: !1
};



document.getElementById("send-proto").addEventListener("click",  function () {
        const account = new o.Account;

        account.setName(myObject.name),
        account.setId(myObject.id),
        account.setDatetime(myObject.datetime),
        account.setIsnew(myObject.isNew);

        const s = account.serializeBinary();
        console.log('Send:', s);
        socket.send(s)
    }
)