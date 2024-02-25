import "./NavBar.css"; // Assuming the CSS file is named 'style_with_navbar.css' and is in the same directory
import logo from "../assets/Logo_trans.png";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-item">
        <div className="homebtn">
          <img src={logo} alt="logo" height="30px" width="30px"></img>HealQuest
        </div>
      </div>
      <div className="nav-item">Login/ SignUp</div>
    </div>
  );
};

export default Navbar;
