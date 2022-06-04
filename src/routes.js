import Home from "./pages/Home";
import Login from "./pages/Login";
import LupaPassword from "./pages/LupaPassword"
const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path:"/login",
        component: Login
    },
    {
        path:"/lupa-password",
        component: LupaPassword
    }
]

export default routes;