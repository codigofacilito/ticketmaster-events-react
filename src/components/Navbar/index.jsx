import { useState, useEffect } from "react";

const Navbar = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        console.log('onSearch cambio');
    }, [onSearch]);

    useEffect(() => {
        console.log('Componente listo');
    }, []);

    useEffect(() => {
        console.log('search cambio');
    }, [search]);

    const handleInputChange = (evt) => {
        setSearch(evt.target.value);
    };

    const handleInputKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            onSearch(search);
        }
    };
    
    return (
        <div>
            <p>Mi boletera</p>
            <input
                placeholder="Busca tu evento favorito"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={search}
            />
        </div>
    );
};

export default Navbar;