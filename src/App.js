<<<<<<< HEAD
import routes from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
=======
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> ee85afbae664fbdfa7cfc995539cf90f2dcf9223

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
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
=======
      <h2>HELLO WORLD</h2>
>>>>>>> ee85afbae664fbdfa7cfc995539cf90f2dcf9223
    </div>
  );
}

export default App;
