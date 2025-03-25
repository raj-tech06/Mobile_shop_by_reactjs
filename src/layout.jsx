import { Outlet } from "react-router-dom";
import TopBar from "./comanComponent/TopHeader";
import NavBar from "./comanComponent/Topnav";

const Layout=()=>{
    return(
        <>
        <TopBar/>
        <NavBar />

        <Outlet />


        www

        </>
    )
}
export default Layout;