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
                    { _id: '111', username: 'Philips', time: '20.7.2021 19:52', comment: 'This page is awesome. I Laughed. I Cried. It Changed My Life.' },
                    { _id: '222', username: 'Zaķis', time: '20.7.2021 20:04', comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nemo cupiditate, animi praesentium labore deleniti iste natus harum similique porro ad neque reprehenderit culpa reiciendis veritatis aliquam non dolorum quisquam?' },
                    { _id: '333', username: 'Ruksis', time: '21.7.2021 12:12', comment: 'random text' },
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