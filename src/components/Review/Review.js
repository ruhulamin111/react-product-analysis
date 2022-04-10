import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';

const Review = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('comment.json')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [comments])

    return (
        <div>
            <h3>This is Review</h3>
            {
                comments.map(comment =>
                    <Comment
                        key={comment.id}
                        comment={comment}
                    ></Comment>)
            }

        </div>
    );
};

export default Review;