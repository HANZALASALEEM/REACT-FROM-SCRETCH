import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import Performence from './screens/Performence';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/performence" element={<Performence />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
