

import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Count from './components/CounterApp';
import Form from './components/Form';
import CounterApp from './components/IncrementOrDecrement';

function App() {
  
  return (
    <>
   

     <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 

      </Routes>
     </Router>

     <Count/>

     <Form/>

     <CounterApp/>
    </>
  )
}

export default App
