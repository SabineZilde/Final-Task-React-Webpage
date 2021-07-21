import { NavLink } from 'react-router-dom';
import logo from '../Assets/Img/Fox-Logo.png';
import '../Assets/CSS/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from 'react-responsive';

function Header() {
    const isTabletOrMobile = useMediaQuery({ query: `(max-width: 991px)` });

    let icons = (
        <div>
            <a className="icon" href="https://www.github.com"><FontAwesomeIcon icon={faGithub} /></a>&nbsp;&nbsp;
            <a className="icon" href="https://www.github.com"><FontAwesomeIcon icon={faTwitter} /></a>&nbsp;&nbsp;
            <a className="icon" href="https://www.github.com"><FontAwesomeIcon icon={faInstagram} /></a>&nbsp;&nbsp;
            <a className="icon" href="https://www.github.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>&nbsp;&nbsp;
        </div>
    )
    
    if (isTabletOrMobile) {
        icons = (
            <div></div>
        )
        
    }

    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavLink exact to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img src={logo} height="40" alt="logo" />
                    </NavLink>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink exact to="/" className="nav-link px-2 text-white">Home</NavLink></li>
                        <li><NavLink to="/articles" className="nav-link px-2 text-white">Articles</NavLink></li>
                        <li><NavLink to="/comments" className="nav-link px-2 text-white">Comments</NavLink></li>
                        <li><NavLink to="/about" className="nav-link px-2 text-white">About Us</NavLink></li>
                    </ul>
                    {icons}
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="text-end">
                        <NavLink to="/login">
                            <button type="button" className="btn btn-outline-light me-2">Login</button>
                        </NavLink>
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