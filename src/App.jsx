import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Restaurants from './pages/Restaurants/Restaurants';
import AboutUs from './pages/AboutUs/AboutUs';
import Carrers from './pages/Carrers/Carrers';
import Franchise from './pages/Franchise/Franchise';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App () {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/carrers" element={<Carrers />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  )
}

export default App
