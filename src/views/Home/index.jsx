import { useRef, useState } from 'react';

import Navbar from '../../components/Navbar';
import Events from '../../components/Events';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef();

    const handleNavbarSearch = (term) => {
        console.log(containerRef.current.getterSomething);
        setSearchTerm(term);
    };

    return (
        <>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            <Events searchTerm={searchTerm} />     
        </>
    )
};

export default Home;