import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="container-fluid p-5 border-top bg-dark text-white">
            <div className="row">
                <div className="col-12 col-md">
                    <img className="mb-2" src="https://www.pinclipart.com/picdir/big/580-5808922_fmes-fox-logo-transparent-fox-logo-png-clipart.png" alt="small fox logo" width="24" />
                    <small className="d-block mb-3 text-muted">© 2017–2021</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><NavLink className="link-secondary text-decoration-none" to="/">Random feature</NavLink></li>
                        <li className="mb-1"><NavLink className="link-secondary text-decoration-none" to="/">Team feature</NavLink></li>
                        <li className="mb-1"><NavLink className="link-secondary text-decoration-none" to="/">Stuff for developers</NavLink></li>
                        <li className="mb-1"><NavLink className="link-secondary text-decoration-none" to="/">Last time</NavLink></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><NavLink className="link-secondary text-decoration-none" to="/">Resource</NavLink></li>
                        <li className="mb-1"><NavLink className="link-secondary text-decoration-none" to="/">Resource name</NavLink></li>
                        <li className="mb-1"><NavLink className="link-secondary text-decoration-none" to="/">Another resource</NavLink></li>
                        <li className="mb-1"><NavLink className="link-secondary text-decoration-none" to="/">Final resource</NavLink></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul class="list-unstyled text-small">
                        <li className="mb-1"><NavLink className="link-secondary text-decoration-none" to="/">Team</NavLink></li>
                        <li className="mb-1"><NavLink className="link-secondary text-decoration-none" to="/">Locations</NavLink></li>
                        <li className="mb-1"><NavLink className="link-secondary text-decoration-none" to="/">Privacy</NavLink></li>
                        <li className="mb-1"><NavLink className="link-secondary text-decoration-none" to="/">Terms</NavLink></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;