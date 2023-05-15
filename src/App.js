import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Navbar } from 'react-bootstrap';
import Navbar from './components/Navbarr';
import Home from './components/Home';
import FavList from './components/FavList';
import {Routes , Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/favlist' element={<FavList/>}> </Route>
    </Routes>
    </>
  );
}

export default App;
