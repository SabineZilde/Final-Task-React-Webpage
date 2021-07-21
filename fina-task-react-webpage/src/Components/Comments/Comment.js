import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Comment({ comment }) {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <b>{comment.username}</b> <small className="text-muted">@ {comment.time}</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {comment.comment}
                        </div>
                    </div>
                </div>
                <div className="col-2 d-flex  justify-content-end align-items-center">
                    <button className="btn">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>

            </div>
        </li>
    )
}

export default Comment;