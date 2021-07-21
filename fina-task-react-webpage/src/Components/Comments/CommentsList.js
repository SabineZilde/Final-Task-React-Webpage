import { useState, useEffect } from "react";
import Comment from './Comment'; 

function CommentsList() {
    const [comments, setComments] = useState({
        loading: true,
        items: [],
    });



    useEffect(() => {
        setInterval(() => {
            setComments({
                loading: false,
                items: [
                    { _id: '111', username: 'Sabīne', time: '12:12', comment: 'random text' },
                    { _id: '222', username: 'Zaķis', time: '13:10', comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nemo cupiditate, animi praesentium labore deleniti iste natus harum similique porro ad neque reprehenderit culpa reiciendis veritatis aliquam non dolorum quisquam?' },
                    { _id: '333', username: 'Ruksis', time: '14:42', comment: 'random text' },
                ]
            });
        }, 2000);
    }, []);

    let content = <h5>Loading...</h5>
    if (!comments.loading) {
        const commentElements = comments.items.map((comment, index) => <Comment comment={comment} key={index} />);

        content = (
            <ul className="list-group">
                {commentElements}
            </ul>
        )
    };

    return (
        <div>
            {content}
        </div>
    )
};

export default CommentsList;