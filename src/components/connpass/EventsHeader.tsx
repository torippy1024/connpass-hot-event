import useSWR from 'swr';
import {EventsDatesType} from '../../models/Connpass';

const fetcher = <T,>(url: string): Promise<T> =>
  fetch(url).then((res) => res.json());

const EventsHeader = ({
  selectedValue,
  setSelectedValue,
}: {
  selectedValue: number;
  setSelectedValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {data: eventsDates} = useSWR(
    'https://shima-usa.net/connpass-api/v1/date/',
    fetcher<EventsDatesType>,
  );
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(event.target.value);
    setSelectedValue(newValue);
  };
  return (
    <div className='flex justify-between items-center border-b'>
      <div className='flex items-center justify-center m-2 text-3xl'>
        {eventsDates &&
          `${eventsDates.days[selectedValue].slice(4, 6)}/${eventsDates.days[
            selectedValue
          ].slice(6, 8)}のイベント一覧`}
      </div>
      <div className=''>
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
  );
};

export default EventsHeader;
