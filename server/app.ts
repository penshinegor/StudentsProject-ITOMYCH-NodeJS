import * as WebSocket from 'ws';
import server from './http';
import {dispatchEvent} from './controllers/class-controller';

const PORT = 8080;

server.listen(8080, () => {
    console.log(`Our server has been started on port ${PORT}... and can get and send http methods`);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    ws.send('Hi there, it\'s WebSocket server');
    console.log('New user has been connected');

    ws.on('message', event => {
        dispatchEvent(ws, event);
    });

    ws.on('close', () => {
        console.log('Our user has been disconnected')
    });

    ws.onerror = () => {
        console.log('Something went wrong');
    }
});
console.log(`The WebSocket server is running on port ${PORT}...`);
