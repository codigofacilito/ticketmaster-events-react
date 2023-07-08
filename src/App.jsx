import Navbar from './components/Navbar';
import Events from './components/Events';
import './App.css'

function App() {
  const handleSearch = (evt, search) => {
    if (evt.key === 'Enter') {
      alert(`Buscando ${search}`);
    }
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Events />
    </>
  )
}

export default App
