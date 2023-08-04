import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch  } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Login from './pages/login';
import Auth from './pages/auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/homepage" element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
