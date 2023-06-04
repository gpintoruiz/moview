import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Index from "./pages/Index";
import Help from "./pages/Help"
import Footer from "./components/Footer/Footer";
import NavHeader from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from "./pages/Error404/Error404"
import Comprobar from "./pages/Comprobar";
import { AuthProvider } from './AuthContext';
import Detalle from './pages/DetallePelicula/DetallePelicula'

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavHeader />
        <Routes>
          <Route index element={<Index />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Error />} />
          <Route path='/comprobar' element={<Comprobar />} />
          <Route path="/detalle" element={<Detalle/>}/>
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
