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
import UserProfile from "./pages/UserProfile";
import AdminUser from "./pages/AdminUser";
import Ranking from "./pages/Ranking";
import AdminKelolaThread from "./pages/AdminKelolaThread";
import AdminDashboard from "./pages/AdminDashboard";
import AdminThreadById from "./pages/AdminThreadById";



const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/trending",
    component: HomeTrending,
  },
  // {
  //   path: "/login",
  //   component: Login,
  // },
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
    path: "/user/:id",
    component: UserProfile,
  },
  {
    path: "/edit-profile",
    component: EditProfile,
  },
  // {
  //   path: "/register",
  //   component: Signup,
  // },
  {
    path: "/notifikasi",
    component: Notifikasi,
  },
  {
    path: "/ranking",
    component: Ranking,
  },
  // {
  //   path: "/admin-user",
  //   component: AdminUser,
  // },
  // {
  //   path: "/admin-kelolathread",
  //   component: AdminKelolaThread,
  // },
  // {
  //   path: "/admin-dashboard",
  //   component: AdminDashboard,
  // },
  // {
  //   path: "/thread/:id",
  //   component: AdminThreadById,
  // },
];

export default routes;
