import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Registration/Register';
import HomePage from './Components/Home/HomePage';
import Weather from './Components/Weather/Weather';
import Wishlist from './Components/Wishlist/Wishlist';



function App() {
  return (
    <div>
    <Router>
  
        <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/home' element={<HomePage/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/weather' element={<Weather/>}/>
            <Route exact path='/wish' element={<Wishlist/>}/>
        </Routes>
    </Router>
</div>
);
}

export default App;
