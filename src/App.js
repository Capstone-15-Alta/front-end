import routes from "./routes";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={index}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
