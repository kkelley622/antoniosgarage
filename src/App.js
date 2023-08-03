import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/sobre' element={<About/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
