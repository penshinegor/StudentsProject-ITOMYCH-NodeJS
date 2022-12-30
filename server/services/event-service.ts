import eventValidation from '../middleware/event-validation-middleware';
import {TypeOfEvent} from '../../components/enums/event-enum';

let listOfConnections = new Map();

class EventService {
    public connect(ws) {
        let id = Math.random() * (1000 - 1) + 1;
        listOfConnections.set(id, ws);
        listOfConnections.forEach((client: WebSocket) => {
            if (client !== ws) {
                client.send(`New user has been connected by ${id} id`);
            }
        });
        if (listOfConnections.size !== 1) {
            listOfConnections.forEach((client: WebSocket, key: number) => {
                if (client !== ws) {
                    ws.send(`Session of client ${key}`);
                }
            });
        }
        console.log('New user has been connected');
    }
    public executeEvent(ws, event) {
        const correctEvent = eventValidation(event);
        if (correctEvent.type === TypeOfEvent.Attack) {
            this.attack(correctEvent, ws);
        } else if (correctEvent.type === TypeOfEvent.Ability) {
            this.applyAbility(correctEvent, ws);
        } else if (correctEvent.type === TypeOfEvent.Message) {
            this.sendMessage(correctEvent);
        } else {
            this.restore(ws);
        }
    }
    public close(ws) {
        listOfConnections.forEach((client: WebSocket, key) => {
            if (client === ws) {
                listOfConnections.delete(key);
                return;
            }
        });
        console.log('One of users has been disconnected');
    }

    private attack(correctEvent, ws) {
        let mainId;
        for (let key of listOfConnections.keys()) {
            if (listOfConnections.get(key) === ws) {
                mainId = key;
            }
        }
        listOfConnections.forEach((client: WebSocket, key) => {
            if (key === correctEvent.userId) {
                client.send(`You were attacked from user by ${mainId} id`);
            }
            client.send(`Changed session from attack of user by ${correctEvent.userId} id`);
        });
    }
    private applyAbility(correctEvent, ws) {
        let mainId;
        for (let key of listOfConnections.keys()) {
            if (listOfConnections.get(key) === ws) {
                mainId = key;
            }
        }
        listOfConnections.forEach((client: WebSocket, key) => {
            if (key === correctEvent.userId) {
                client.send(`You were applied ability from user by ${mainId} id`);
            }
            client.send(`Changed session from applying ability of user by ${correctEvent.userId} id`);
        });
    }
    private sendMessage(correctEvent) {
        listOfConnections.forEach((client: WebSocket) => {
            client.send(correctEvent.message);
        });
    }
    private restore(ws) {
        let mainId;
        for (let key of listOfConnections.keys()) {
            if (listOfConnections.get(key) === ws) {
                mainId = key;
            }
        }
        listOfConnections.forEach((client: WebSocket) => {
            if (client === ws) {
                client.send('You were restored');
            }
            client.send(`Updated session from restoring of user by ${mainId} id`);
        });
    }
}

export default EventService;