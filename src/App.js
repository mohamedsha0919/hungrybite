import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import './App.css';


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Navbar />}>
        <Route index element={<Home/>} />
        <Route path='/Services' element={<Services/>} />
        </Route>
    </Routes>
    </>
  );
}

export default App;
