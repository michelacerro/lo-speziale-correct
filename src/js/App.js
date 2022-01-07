// Style
import '../css/App.css';

// Dependencies
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {QueryClientProvider, QueryClient} from 'react-query';

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
import UseScrollToTop from './hooks/UseScrollToTop';


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <UseScrollToTop />
        <Header />
        <Routes>
          <Route path='/lo-speziale-correct' element={<Home />} />
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
    </QueryClientProvider>
  )
};
export default App;