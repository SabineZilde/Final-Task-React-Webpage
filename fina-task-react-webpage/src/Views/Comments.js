import { useState } from 'react';
import Breadcrumbs from '../Components/Breadcrumbs';
import CommentsList from '../Components/Comments/CommentsList';
import NewCommentForm from '../Components/Comments/NewCommentForm';
import { useMediaQuery } from 'react-responsive';

function Comments() {
    const [counter, setCounter] = useState(0);

    const reloadCommentsList = () => {
        setCounter(counter + 1);
    };

    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Comments' },
    ];

    const isTabletOrMobile = useMediaQuery({ query: `(max-width: 991px)` });

    let chat = (
        <div className="row px-5 mt-3 mb-5 bkg-gradient-blue">
            <div className="col-8 my-5 offset-2" style={{ backgroundColor: 'white', borderRadius: '5px 5px' }}>
                <div className="row p-3">
                    <div className="col">
                        <CommentsList reloadCommentsList={reloadCommentsList} counter={counter} />
                    </div>
                </div>
                <NewCommentForm reloadCommentsList={reloadCommentsList} />
            </div>
        </div>
    );

    if (isTabletOrMobile) {
        chat = (
            <div className="row px-2 mt-3 mb-5 bkg-gradient-blue">
                <div className="col my-2" style={{ backgroundColor: 'white', borderRadius: '5px 5px' }}>
                    <div className="row p-3">
                        <div className="col">
                            <CommentsList reloadCommentsList={reloadCommentsList} counter={counter} />
                        </div>
                    </div>
                    <NewCommentForm reloadCommentsList={reloadCommentsList} />
                </div>
            </div>
        );
    };

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
            {chat}

        </div>
    );
}

export default Comments;
