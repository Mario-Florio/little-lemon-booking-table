import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Reservations from './pages/Reservations/Reservations';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/reservations' element={<Reservations/>} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
