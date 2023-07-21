import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";

const Navbar = forwardRef(({ onSearch }, ref) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        // console.log('onSearch cambio');
    }, [onSearch]);

    useEffect(() => {
        // console.log('Componente listo');
    }, []);

    useEffect(() => {
        // console.log('search cambio');
    }, [search]);

    useImperativeHandle(ref, () => ({
        search,
        setSearch,
    }));

    const handleInputChange = (evt) => {
        setSearch(evt.target.value);
    };

    const handleInputKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            onSearch(search);
        }
    };
    
    return (
        <div ref={ref} style={{
            marginBottom: 14,
            width: '100%',
            display: 'flex',
        }}>
            <div style={{ flex: 1, display: 'flex' }}>
                <p style={{
                    fontSize: 24,
                    fontWeight: 'bold'
                }}>Mi boletera</p>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <input
                    placeholder="Busca tu evento favorito"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    value={search}
                    style={{
                        fontSize: 16,
                        padding: '6px 12px',
                        borderRadius: 4,
                        border: 'none',
                        width: 200,
                    }}
                />
                <Link to="/profile/my-info" style={{
                    marginLeft: 24,
                    color: '#fff',
                    textDecoration: 'none'
                }}>Mi perfil</Link>
            </div>
        </div>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;