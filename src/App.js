import routes from "./routes";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Signin";
import Signup from "./pages/Signup";
import PrivateRoutes from "./PrivateRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUser from "./pages/AdminUser";
import AdminKelolaThread from "./pages/AdminKelolaThread";
import AdminThreadById from "./pages/AdminThreadById";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route element={<PrivateRoutes />}>
            {routes.map((route, index) => (
              <Route
                path={route.path}
                element={<route.component />}
                key={index}
              />
            ))}

            <Route element={<ProtectedRoutes allowRoles={"ADMIN"} />}>
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/admin-user" element={<AdminUser />} />
              <Route
                path="/admin-kelolathread"
                element={<AdminKelolaThread />}
              />
              <Route path="thread/:id" element={<AdminThreadById />} />
            </Route>

            <Route path="/user/:id" element={<UserProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
