import io from 'socket.io-client';
import { baseUrl } from './apiRequests'
const socket = io(baseUrl);

socket.on("selectionPriceUpdate", data => console.log('selectionPriceUpdate', data)); // very often
socket.on("SelectionStateUpdate", data => console.log('selectionStateUpdate', data)); // rare
socket.on("eventStateUpdate", data => console.log('eventStateUpdate', data)); // ofter

