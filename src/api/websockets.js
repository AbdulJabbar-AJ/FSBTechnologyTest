import io from 'socket.io-client';
const socket = io("http://localhost:3000");

socket.on("selectionPriceUpdate", data => console.log('selectionPriceUpdate', data));
socket.on("SelectionStateUpdate", data => console.log('selectionStateUpdate', data));
socket.on("eventStateUpdate", data => console.log('eventStateUpdate', data));