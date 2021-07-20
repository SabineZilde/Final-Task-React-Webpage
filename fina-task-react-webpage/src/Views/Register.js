import Breadcrumbs from '../Components/Breadcrumbs';

function Chat() {
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Register' },
    ];

    return (
        <div className="container-fluid" style={{backgroundColor: 'lightgrey'}}>
            <div className="row">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4>Register</h4>
                </div>
            </div>
        </div>
    );
}

export default Chat;
