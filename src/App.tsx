import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import Performence from './screens/Performence';
import ReferentialEquality from './screens/ReferentialEquality';
import ReduceRendering from './screens/ReduceRendering';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/performence" element={<Performence />} />
        <Route path="/referentialEquality" element={<ReferentialEquality />} />
        <Route path="/reduceRendering" element={<ReduceRendering />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
