import React from 'react'
import "./index.css"
import Home from './routes/Home';
import Products from './routes/Products';
import Contacts from './routes/Contacts';
import About from './routes/About';
import{ Routes, Route} from 'react-router-dom';
function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
    <Route path="/about" element={<About/>}/>
   </Routes>
   </>
  );
}

export default App;
