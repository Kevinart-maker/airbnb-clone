import './Navbar.css'
import logo from '/airbnb-logo.png'

const Navbar = () => {
    return (
        <div className="nav-container">
            <img src={logo} alt="" />
        </div>
    );
}
 
export default Navbar;