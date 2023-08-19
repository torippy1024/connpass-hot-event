import {useState} from 'react';
import {connpassEventsType} from '../models/Connpass';
import useSWR from 'swr';
import EventCardList from '../components/connpass/EventCardList';
import BorderSlider from '../components/connpass/BorderSlider';
import EventsHeader from '../components/connpass/EventsHeader';

const fetcher = <T,>(url: string): Promise<T> =>
  fetch(url).then((res) => res.json());

const HomePage = () => {
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const [borderNum, setBorderNum] = useState(20);

  const {data: connpassEvents} = useSWR(
    `https://shima-usa.net/connpass-api/v1/events/${selectedValue}/`,
    fetcher<connpassEventsType>,
  );

  return (
    <div className='max-w-3xl mx-auto'>
      <EventsHeader
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />

      <BorderSlider borderNum={borderNum} setBorderNum={setBorderNum} />

      <div>
        {connpassEvents && (
          <EventCardList eventsData={connpassEvents} borderNum={borderNum} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
