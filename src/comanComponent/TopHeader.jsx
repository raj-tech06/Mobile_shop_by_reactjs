import { FaShoppingCart } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { LuScanSearch } from "react-icons/lu";

const TopBar = () => {
  return (
    <div id="top-bar-wrapper"> 

      <div id="top-bar-above" >
      </div>

      {/* Main Top Bar Section */}
      <div id="top-bar">
        <div id="top-bar-content">
          <span>ARS Mobile</span>
        </div>

        {/* Search Section */}
        <div className="search-container">
          <input type="text" id="search-bar" placeholder="Search..." />
          <LuScanSearch id="search-icon" />
        </div>

        {/* Links Section */}
        <div id="top-bar-links">
          <a href="/cart"><FaShoppingCart /></a>
          <a href="/cart"><FaRegHeart /></a>
          <a href="/cart"><RiAdminFill /></a>
          <a href="/login">Login</a>
          <a href="/cart">
            Logout <IoIosLogOut />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
