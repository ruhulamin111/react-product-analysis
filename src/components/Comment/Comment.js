import React from 'react';

const Comment = (props) => {
    const { name, body } = props.comment;

    return (
        <div>
            <h3>{name}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Comment;