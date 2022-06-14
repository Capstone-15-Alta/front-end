import Home from "./pages/Home";
import Login from "./pages/Login";
import LupaPassword from "./pages/LupaPassword";
import BuatThread from "./pages/BuatThread/BuatThread";
import ExploreTopik from "./pages/ExploreTopik/ExploreTopik";
import Profile from "./pages/Profile/Index";

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
];

export default routes;
