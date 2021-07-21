import Breadcrumbs from '../Components/Breadcrumbs';

function Chat() {
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Chat' },
    ];

    return (
        <div className="container-fluid pb-5" style={{ backgroundColor: 'lightgrey' }}>
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
            <div className="row px-5 mt-3 mb-5 bkg-gradient-blue">
                <div className="col-8 my-5 offset-2" style={{ backgroundColor: 'white', borderRadius: '5px 5px' }}>
                    <div className="row p-3">
                        <div className="col">
                            Here will go the user input
                        </div>
                    </div>
                    <div className="row p-3 bkg-gradient-dark text-white">
                        <div className="col">
                            <div>
                                <label htmlFor="username" className="form-label">Username:</label>
                            </div>
                            <div>
                                <input type="text" className="form-control"required/>
                            </div>
                        </div>
                    </div>
                    <div className="row p-3 bkg-gradient-dark text-white" style={{ borderRadius: '0 0 5px 5px' }}>
                        <div className="col">
                            <div>
                                <label htmlFor="textarea" className="form-label" >Message:</label>
                            </div>
                            <div>
                                <textarea className="form-control" />
                                <button className="btn btn-warning mt-3 form-control">Post</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Chat;
