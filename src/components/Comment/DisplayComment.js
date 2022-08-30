import React from 'react';
import './DisplayComment.css'

const DisplayComment = (props) => {
    const { name, rating, body } = props.comment;
    return (
        <div className='comment'>
            <p><b>Name : </b>{name.slice(0, 20)}</p>
            <p><b>Rating : </b>{rating}</p>
            <p><b>Comments : </b>{body}</p>
        </div>
    );
};

export default DisplayComment;