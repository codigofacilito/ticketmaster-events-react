import { useEffect, useRef, useState } from 'react';

import Navbar from '../../components/Navbar';
import Events from '../../components/Events';
import useEventsData from '../../hooks/useEventsData';

const Home = () => {
    const { events, isLoading, error, fetchEvents } = useEventsData();
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef();

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
        fetchEvents(`&keyword=${term}`);
    };

    return (
        <>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            {isLoading ? <div>Cargando resultados...</div> : <Events searchTerm={searchTerm} events={events} />}
            {!!error && <div>Ha ocurrido un error</div>}
        </>
    )
};

export default Home;