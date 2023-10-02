import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import PhotoContext from './PhotoContext';  
import photosData from '../public/photos.json';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [photos, setPhotos] = useState(photosData.photos);  

  return (
    <div>
      <Navbar />

      {/* Paso 2: envolviendo todo con el PhotoContext.Provider */}
      <PhotoContext.Provider value={{ photos, setPhotos }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </PhotoContext.Provider>
    </div>
  );
};

export default App;

