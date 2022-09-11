import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Navber from './page/Navber';
import Property from './page/Property';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/Property' element={<Property></Property>}></Route>
      </Routes>

    </div>
  );
}

export default App;
