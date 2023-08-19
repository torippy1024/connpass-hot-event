import {connpassEventsType} from '../../models/Connpass';
import EventCard from './EventCard';

const EventCardList = ({
  eventsData,
  borderNum,
}: {
  eventsData: connpassEventsType;
  borderNum: number;
}) => {
  const events = [...eventsData.events]
    .reverse()
    .filter((event) => event.accepted >= borderNum);
  return (
    <div>
      {events.map((event) => (
        <div key={event.event_id}>
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default EventCardList;
