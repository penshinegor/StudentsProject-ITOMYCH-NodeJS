import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const PORT = 8080;
const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.end('Hello, it\'s my first server with express');
});
app.post('/', (req, res) => {
    res.end('Server got post method');
});

server.listen(8080, () => {
    console.log(`Our server has been started on port ${PORT}... and can get and send http methods`);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    ws.send('Hi there, it\'s WebSocket server');
    console.log('New user has been connected');

    ws.on('message', data => {
        ws.send(`You sent me this message: ${data}`);
    });

    ws.on('close', () => {
        console.log('Our user has been disconnected')
    });

    ws.onerror = function () {
        console.log('Something went wrong');
    }
});
console.log(`The WebSocket server is running on port ${PORT}...`);
