import './App.css';
import React from 'react'
import Login2 from './Pages/Login2'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ResponsiveDrawer from './Pages/ResponsiveDrawer';
import Home from './Pages/Home';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <div >
      <Router>
        <Routes>
          <Route exact path="/" element={<Login2 />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/drawer" element={<ResponsiveDrawer />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
        </Router>
        </div>
        </>
  );
}

export default App;
