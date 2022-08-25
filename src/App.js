import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Data from './components/Table';
import Form from './components/Form';
import Navigator from './components/Navigator';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Navigator/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/formulario' element={<Form/>} />
        <Route path='/table' element={<Data/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
