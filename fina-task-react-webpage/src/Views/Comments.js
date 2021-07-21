import Breadcrumbs from '../Components/Breadcrumbs';
import CommentsList from '../Components/Comments/CommentsList';
import NewCommentForm from '../Components/Comments/NewCommentForm';

function Comments() {
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Comments' },
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
                    <h4>Comments</h4>
                </div>
            </div>
            <div className="row px-5 mt-3 mb-5 bkg-gradient-blue">
                <div className="col-8 my-5 offset-2" style={{ backgroundColor: 'white', borderRadius: '5px 5px' }}>
                    <div className="row p-3">
                        <div className="col">
                            <CommentsList />
                        </div>
                    </div>
                    
                    <NewCommentForm />
                </div>

            </div>

        </div>
    );
}

export default Comments;
