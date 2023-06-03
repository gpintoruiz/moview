import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Index from "./pages/Index";
import Help from "./pages/Help"
import Footer from "./components/Footer/Footer";
import NavHeader from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from "./pages/comprobar";
import Error from "./pages/Error404/Error404"


function App() {

  return (
    <Router>
      <NavHeader />
      <Routes>
        <Route index element={<Index />}/>
        <Route path="/help" element={<Help />}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
