import Home from "./pages/Home";
import Login from "./pages/Signin";
import LupaPassword from "./pages/ForgotPassword";
import BuatThread from "./pages/BuatThread";
import ExploreTopik from "./pages/ExploreTopik";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/lupa-password",
    component: LupaPassword,
  },
  {
    path: "/buat-thread",
    component: BuatThread,
  },
  {
    path: "/explore-topik",
    component: ExploreTopik,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/signup",
    component: Signup,
  },
];

export default routes;
