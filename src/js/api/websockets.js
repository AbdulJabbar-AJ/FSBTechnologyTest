import io from 'socket.io-client';
import { baseUrl } from './apiRequests'
const socket = io(baseUrl);
import { store } from '../../index'
import { selectionPriceUpdate, selectionStateUpdate, eventStateUpdate } from '../redux/actions';

socket.on("selectionPriceUpdate", data => store.dispatch(selectionPriceUpdate(data)));
socket.on("selectionStateUpdate", data => store.dispatch(selectionStateUpdate(data)));
socket.on("eventStateUpdate", data => store.dispatch(eventStateUpdate(data)));
