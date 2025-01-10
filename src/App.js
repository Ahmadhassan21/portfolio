import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';  
import Header from './Components/Header';
import Main from './Components/Main';
import Home from './Components/Home';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
function App() {
  return (
    <>
   <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<Aboutme />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>

    </>
  );
}

export default App;
