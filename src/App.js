import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/servicios' element={<Services />}/>
          <Route path='/contacta' element={<Contact />}></Route>
          <Route path='/sobre' element={<About />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
