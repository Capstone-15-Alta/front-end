import routes from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
