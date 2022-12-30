import EventService from '../services/event-service';
import errorHandler from '../error-handler/error-handler';

let eventService = new EventService();

class EventController {
    public listenEvents(wss) {
        wss.on('connection', ws => {

            eventService.connect(ws);

            ws.on('message', (event) => {
                try {
                    eventService.executeEvent(ws, event);
                }
                catch (err) {
                    errorHandler(err, null, ws, null);
                }
            });

            ws.on('close', () => {
                eventService.close(ws);
            });

            ws.on('error', (error: Error) => {
                console.log('The server sent an error', error);
            });
        });
    }
}

export default EventController;
