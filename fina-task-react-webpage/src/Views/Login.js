import Breadcrumbs from '../Components/Breadcrumbs';

function Login() {
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Login' },
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4>Login</h4>
                </div>
            </div>
        </div>
    );
}

export default Login;
