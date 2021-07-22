import axios from "axios";
import { useState, useEffect } from "react";
import Comment from './Comment';

function CommentsList({ counter, reloadCounter }) {
    const [comments, setComments] = useState({
        loading: true,
        items: [],
    });

    const loadComments = async () => {
        setComments({
            loading: true,
            items: [],
        });
        try {
            const url = 'http://localhost:8082/comments';
            const response = await axios.get(url);
            setComments({
                loading: false,
                items: response.data,
            });
        } catch (e) {
            alert('Something went wrong2');
            setComments({
                loading: false,
                items: [],
            });
        };
    };

    useEffect(() => {
        loadComments();
    }, [counter]); //whenever the counter is updated, the page will be rerendered and commentlist updated

    let content = <h5>Loading...</h5>
    if (!comments.loading && comments.items.length === 0) {
        content = <h5>No comments added yet</h5>
    } else if (!comments.loading) {
        const commentElements = comments.items.map(( comment, index) => {
            return <Comment comment={comment} key={index} reloadCounter={reloadCounter} />
        });

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