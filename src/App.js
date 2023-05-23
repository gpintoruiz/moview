import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Header from "./components/Header";
import Index from "./pages/Index";
import Footer from "./components/Footer/Footer";
import NavHeader from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavHeader />
      <Routes>
        <Route index element={<Index />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
