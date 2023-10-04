import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Reservations from './pages/Reservations/Reservations';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Nav/>
      <Reservations/>
      <Footer/>
    </>
  );
}

export default App;
