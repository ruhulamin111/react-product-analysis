import React from 'react';
import './DisplayComment.css'

const DisplayComment = (props) => {
    const { name, rating, body } = props.comment
    return (
        <div className='comment'>
            <h4>Name: {name.slice(0, 20)}</h4>
            <h5>Rating: {rating} </h5>
            <p>Comment: {body} </p>
        </div>
    );
};

export default DisplayComment;