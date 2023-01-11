import {WebSocket} from 'ws';
import server from './http';
import EventController from './controllers/event-controller';

const PORT = 8080;

server.listen(8080, () => {
    console.log(`Our server has been started on port ${PORT}...`);
});

const wss: WebSocket = new WebSocket.Server({ server });
const eventController = new EventController();

eventController.listenEvents(wss);

console.log(`The WebSocket server is running on port ${PORT}...`);
