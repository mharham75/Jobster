//
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//components
import Landing from './pages/landing/Landing'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ErrorPage from './pages/error/ErrorPage';

//styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
