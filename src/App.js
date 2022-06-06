import routes from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            routes.map((route, index) => (
              <Route 
                path={route.path}
                element={<route.component/>}
              />
            ))
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
