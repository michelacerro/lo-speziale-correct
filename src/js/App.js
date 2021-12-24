// Style
import '../css/App.css';

// Dependencies
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Contacts from './pages/Contacts';
import Privacy from './pages/Privacy';
import Error from './pages/Error';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Functionalities
import ScrollToTop from './ScrollToTop';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/lo-speziale' element={<Home />} />
          <Route path='/chi-siamo' element={<About />} />
          <Route path='/corsi' element={<Courses />} />
          <Route path='/ricette' element={<Recipes />} />
          <Route path='/ricette/:id' element={<SingleRecipe />} />
          <Route path='/contatti' element={<Contacts />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
};
export default App;