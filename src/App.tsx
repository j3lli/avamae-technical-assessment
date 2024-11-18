import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs, ContactUs, Home } from './pages';
import { NavBar } from './components';

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
