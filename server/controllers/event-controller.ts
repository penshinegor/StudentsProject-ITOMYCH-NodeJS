import EventService from '../services/event-service';
import errorHandler from '../error-handler/error-handler';
import eventValidation from '../middleware/event-validation-middleware';
import EventProvider from '../services/event-provider';

let eventService = new EventService();

class EventController {
    public listenEvents(wss) {
        wss.on('connection', ws => {

            eventService.connect(ws);

            ws.on('message', (event) => {
                try {
                    eventValidation(event);
                    EventProvider.executeEvent(event, eventService, ws);
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
