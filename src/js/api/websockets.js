import io from 'socket.io-client';
import { baseUrl } from './apiRequests'
const socket = io(baseUrl);
import { store } from '../../index'
import { selectionPriceUpdate, selectionStateUpdate, eventStateUpdate } from '../redux/actions';


// Log only
// socket.on("selectionPriceUpdate", data => console.log('selectionPriceUpdate', data));
// socket.on("selectionStateUpdate", data => console.log('selectionStateUpdate', data)); // capital letter on this socket connection, nice try ;)
// socket.on("eventStateUpdate", data => console.log('eventStateUpdate', data));


// Log and run
// socket.on("selectionPriceUpdate", data => {
//     console.log('selectionPriceUpdate', data)
//     store.dispatch(selectionPriceUpdate(data))
// });
// socket.on("selectionStateUpdate", data => {
//     console.log('selectionStateUpdate', data)
//     store.dispatch(selectionStateUpdate(data))
// });
// socket.on("eventStateUpdate", data => {
//     console.log('eventStateUpdate', data)
//     store.dispatch(eventStateUpdate(data))
// });

// Run only
socket.on("selectionPriceUpdate", data => store.dispatch(selectionPriceUpdate(data)));
socket.on("selectionStateUpdate", data => store.dispatch(selectionStateUpdate(data)));
socket.on("eventStateUpdate", data =>  store.dispatch(eventStateUpdate(data)));


// Display events by categories,
// Show the sub category under the name in small (since there are not that many sub cats)
// Show: ------Name------ -price- -counter-
// Show greyed out if anything inactive, and show tooltip with what part is not active (e.g., event, or selection)
