import { Outlet } from "react-router-dom";
import TopBar from "./comanComponent/TopHeader";
import NavBar from "./comanComponent/Topnav";
import Home from "./pages/Home";
import About from "./pages/about";

const Layout=()=>{
    return(
        <>
        <TopBar/>
        <NavBar />
        <Home/>
        {/* <About/> */}
        <Outlet />


        www

        </>
    )
}
export default Layout;