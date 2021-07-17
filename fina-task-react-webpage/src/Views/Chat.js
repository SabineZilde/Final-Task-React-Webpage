import Breadcrumbs from '../Components/Breadcrumbs';

function Chat() {
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Chat' },
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
                    <h4>Chat</h4>
                </div>
            </div>
        </div>
    );
}

export default Chat;
