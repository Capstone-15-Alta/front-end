import routes from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./pages/Signin/Signin";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
=======
        <Routes>
          {
            routes.map((route, index) => (
              <Route 
                path={route.path}
                element={<route.component/>}
              />
            ))
          }
>>>>>>> 42ad5919b9a7a5835324b682644904f0fc75c5af
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
