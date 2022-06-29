import Home from "./pages/Home";
import HomeTrending from "./pages/HomeTrending";
import Login from "./pages/Signin";
import LupaPassword from "./pages/ForgotPassword";
import BuatThread from "./pages/BuatThread";
import ExploreTopik from "./pages/ExploreTopik";
import Notifikasi from "./pages/Notifikasi";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import EditProfile from "./pages/EditProfile";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/trending",
    component: HomeTrending,
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
    path: "/edit-profile",
    component: EditProfile,
  },
  {
    path: "/register",
    component: Signup,
  },
  {
    path: "/notifikasi",
    component: Notifikasi,
  },
];

export default routes;
