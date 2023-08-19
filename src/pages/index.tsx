import {useState} from 'react';
import {EventsDatesType, connpassEventsType} from '../models/Connpass';
import useSWR from 'swr';

const fetcher = <T,>(url: string): Promise<T> =>
  fetch(url).then((res) => res.json());

const HomePage = () => {
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const [borderNum, setBorderNum] = useState(20);
  const {data: eventsDates} = useSWR(
    'https://shima-usa.net/connpass-api/v1/date/',
    fetcher<EventsDatesType>,
  );
  const {data: connpassEvents} = useSWR(
    `https://shima-usa.net/connpass-api/v1/events/${selectedValue}/`,
    fetcher<connpassEventsType>,
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setSelectedValue(newValue);
  };

  return (
    <div className='max-w-3xl mx-auto'>
      <div className='flex justify-between items-center border-b'>
        <div className='flex items-center justify-center m-2 text-3xl'>
          {eventsDates &&
            `${eventsDates.days[selectedValue].slice(4, 6)}/${eventsDates.days[
              selectedValue
            ].slice(6, 8)}のイベント一覧`}
        </div>
        <div className='w-40'>
          <select
            value={selectedValue}
            onChange={handleChange}
            className='select select-ghost select-bordered w-full'
          >
            {eventsDates &&
              eventsDates.days.map((day, i) => (
                <option key={day} value={i}>
                  {day.slice(4, 6)}/{day.slice(6, 8)}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div>
        <div className='flex justify-between items-center text-sm'>
          <div>参加人数</div>
          <div>
            <span className='text-base'>{borderNum}</span>人以上
          </div>
        </div>
        <input
          type='range'
          min={0}
          max='50'
          value={borderNum}
          className='range range-primary'
          step='5'
          onChange={(e) => setBorderNum(Number(e.target.value))}
        />
      </div>
      <div>
        {connpassEvents && (
          <div>
            {[...connpassEvents.events]
              .reverse()
              .filter((event) => event.accepted >= borderNum)
              .map((event) => (
                <div key={event.event_id}>
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
                          {event.started_at.slice(11, 16)} ~{' '}
                          {event.ended_at.slice(11, 16)}
                        </div>
                      </div>
                      <div className='p-1 break-all'>
                        <div className='truncate-2-lines text-lg text-teal-900 underline hover:no-underline'>
                          <a
                            href={event.event_url}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {event.title}
                          </a>
                        </div>
                        <div className='truncate-2-lines text-gray-400'>
                          {event.description.replace(/(<([^>]+)>)/gi, '')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
