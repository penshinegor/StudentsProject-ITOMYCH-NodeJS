import {TypeOfEvent} from '../../components/enums/event-enum';
import EventService from './event-service';

class EventProvider {
    public static executeEvent(event, eventService: EventService, ws: WebSocket) {
        if (event.type === TypeOfEvent.Attack) {
            eventService.attack(event, ws);
        } else if (event.type === TypeOfEvent.Ability) {
            eventService.applyAbility(event, ws);
        } else if (event.type === TypeOfEvent.Message) {
            eventService.sendMessage(event);
        } else {
            eventService.restore(ws);
        }
    }
}

export default EventProvider;