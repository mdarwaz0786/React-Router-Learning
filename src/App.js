import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import Home from './routes/Home.js';
import Contact from './routes/Contact.js';
import About from './routes/About.js';
import Product from './routes/Product.js';
import NotFound from './routes/NotFound.js';
import Project from './routes/Project.js';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
