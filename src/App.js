import {React, useState} from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Index from './js/Index';
import Login from './js/Login';
import Playlists from './js/Playlists';
import Register from './js/Register';

function App() {

  const [basicHeader, setBasicHeader] = useState('');

  let setNameAndPassword = (name, password) => {
      let header = btoa(name + ":" + password)
      setBasicHeader(header)
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/login" element={<Login headerFunc={(name, password) => setNameAndPassword(name, password)} />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/playlists" element={<Playlists basicHeader={basicHeader}/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;