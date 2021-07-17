import { NavLink } from 'react-router-dom';
import logo from '../Assets/Img/Fox-Logo.png';
import '../Assets/CSS/Header.css';

function Header() {

    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavLink exact to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img src={logo} width="35" height="40" alt="logo" />
                    </NavLink>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink exact to="/" className="nav-link px-2 text-white">Home</NavLink></li>
                        <li><NavLink to="/articles" className="nav-link px-2 text-white">Articles</NavLink></li>
                        <li><NavLink to="/chat" className="nav-link px-2 text-white">Chat</NavLink></li>
                        <li><NavLink to="/about" className="nav-link px-2 text-white">About Us</NavLink></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <NavLink to="/register">
                            <button type="button" className="btn btn-warning">Register</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;