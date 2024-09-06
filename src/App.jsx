import './App.css';
import Home from './AuthComponent/Home';
import Login from './AuthComponent/Login';
import Signup from './AuthComponent/Signup';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
