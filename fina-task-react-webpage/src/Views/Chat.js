import Breadcrumbs from '../Components/Breadcrumbs';

function Chat() {
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Chat' },
    ];

    return (
        <div className="container-fluid" style={{ backgroundColor: 'lightgrey' }}>
            <div className="row mx-5">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row mx-5">
                <div className="col">
                    <h4>Chat</h4>
                </div>
            </div>
            <div className="row px-5 mt-3 bkg-gradient-blue">
                <div className="col my-5 p-0" style={{ backgroundColor: 'white', borderRadius: '5px 5px' }}>
                    Chat content will go here    
                </div>
            </div>
        </div>
    );
}

export default Chat;
