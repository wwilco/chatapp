var Websocket = require("ws").Server;
var server = new Websocket({port:3000});
var clients = [];
server.on("connection", function(ws){
  clients.push(ws);
  clients.forEach(function(client){
    client.send("Someone has joined the chatroom! Neato!");

    //  setInterval(function(ws){
    //  client.send("Hello!");
    //  },3000)

  })
  console.log(clients.length + " clients are in the room");
  ws.on("message",function(message){
    console.log(message);
    for (i=0;i<clients.length;i++){
      clients[i].send(message);
    }
  })
  ws.on("close",function(){
    var x = clients.indexOf(ws);
    clients.splice(x,1);
    console.log(clients.name + " clients are  still in the room");
    clients.forEach(function(client){
      client.send("Oh no someone left!");
    })
  })
})
