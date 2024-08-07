import { useState } from "react";
import "./NavBar.css"; // Assuming the CSS file is named 'style_with_navbar.css' and is in the same directory
import logo from "../assets/Logo_trans.png";
const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const [loader, setLoader] = useState<boolean>(false);
  const logoutHandler = () => {
    setLoader(true);
    setTimeout(()=>{
      setLoggedIn(false);
      setLoader(false);
    },2000);
  }
  return (
    <div className="nav">
      <div className="nav-item">
        <div className="homebtn">
          <img src={logo} alt="logo" height="30px" width="30px"></img>HealQuest
        </div>
      </div>
      <div className="nav-item">
        { loggedIn ? <div> HMP <button onClick={logoutHandler}>Logout</button></div> : <div> Login | Sign Up</div>}
        {loader? <div> Loading ... </div>: <></>}
      </div>
    </div>
  );
};

export default Navbar;
