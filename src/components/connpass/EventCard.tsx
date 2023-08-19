import {ConnpassEventDataType} from '../../models/Connpass';

const EventCard = ({event}: {event: ConnpassEventDataType}) => {
  const startTime = event.started_at.slice(11, 16);
  const endTime = event.ended_at.slice(11, 16);
  const description = event.description.replace(/(<([^>]+)>)/gi, '');
  return (
    <div className='border border-teal-900 rounded bg-gradient-to-r from-teal-50 to-cyan-50 my-1 shadow flex'>
      <div className='w-24 flex-none border-r rounded-l flex justify-center items-center bg-white'>
        ICON
      </div>
      <div className='flex-1'>
        <div className='border-b border-teal-900 rounded-tr bg-gradient-to-r from-teal-500 to-cyan-500 text-teal-50 flex justify-between items-center p-1'>
          <div>
            参加人数：
            <span className='text-lg'>{event.accepted}</span>
            {event.limit && ` / ${event.limit}`} 人
          </div>
          <div>
            {startTime} ~ {endTime}
          </div>
        </div>
        <div className='p-1 break-all'>
          <div className='truncate-2-lines text-lg text-teal-900 underline hover:no-underline'>
            <a href={event.event_url} target='_blank' rel='noopener noreferrer'>
              {event.title}
            </a>
          </div>
          <div className='truncate-2-lines text-gray-400'>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
