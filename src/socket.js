// we created this file, so we can use our 'single' socket connection, 
// multiple times throughout our application
import socketIOClient from 'socket.io-client';

const endpoint = "http://localhost:3052"

export const socket = socketIOClient(endpoint); // notice no export default
// no export default means we can use different socket endpoints for w/e reason
// example: export const chatSocket = socketIOClient(`${endpoint}/chat`)

