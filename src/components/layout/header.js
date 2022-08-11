// Importing Image Element for logo
import Logo from "../../media/logo.png";


const Header = () => {
  return(
    <div className="header">
      <img src={ Logo } alt="Google Note Lite" />
      <h3>Google Notes Lite</h3>
      <input className="search" type="text" placeholder="Search" disabled />
    </div>
  );
}

export default Header;