import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';

function Comment({ comment, reloadCommentsList }) {
    const [deletingComment, setDeletingComment] = useState(false);
    
    const deleteComment = async () => {
        setDeletingComment(true);
        const url = `http://localhost:8082/comments/${comment._id}`;
        try {
            await axios.delete(url);
            reloadCommentsList();
        } catch(e) {
            alert('Something went wrong1');
        };
    };

    let buttonContent = <FontAwesomeIcon icon={faTrashAlt} />;
    if (deletingComment) {
        buttonContent = <FontAwesomeIcon icon={faSpinner} spin />;
    };

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <b className="fw-bolder">{comment.username}</b> <small className="text-muted">@ {comment.time}</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {comment.comment}
                        </div>
                    </div>
                </div>
                <div className="col-2 d-flex  justify-content-end align-items-center">
                    <button className="btn" disabled={deletingComment} onClick={deleteComment} >
                        {buttonContent}
                    </button>
                </div>

            </div>
        </li>
    )
}

export default Comment;