
import './App.css';
//import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Layout from './Components/Layout';

function App() {
  return (
  <> 
  
  <Router>
    
    
      <Routes>

        {/* Routes where Navbar is hidden */}
         <Route path="/signup" element={<Signup/>} />
       <Route path="/login" element={<Login/>} />
     <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      </Route>
</Routes>
</Router>
    
    </>
  );
}

export default App;
