import { useState } from 'react';

import EventItem from './components/EventItem';
import eventsJSON from '../../data/events.json';

const Events = () => {
    const [data] = useState(eventsJSON);
    const { _embedded: { events }} = data;

    const handleEventItemClick = (id) => {
        console.log('evento clickeado: ', id);
    };

    return (
        <div>
            Eventos
            {events.map((eventItem) => (
                <EventItem
                    key={`event-item-${eventItem.id}`}
                    name={eventItem.name}
                    info={eventItem.info}
                    image={eventItem.images[0].url}
                    onEventClick={handleEventItemClick}
                    id={eventItem.id}
                />
            ))}
        </div>
    );
};

export default Events;