import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3>Theory Part</h3>
            <h4>Question: What is semantic tag?</h4>
            <p>Ans: Html tag are two type. One is semantic and another is non-semantic. Semantic element have meaningful name. For example header, body, section, article, aside, footer etc. As a result it make code easier to read and write.</p>
            <h3>Question: What is Context API?</h3>
            <p>Ans: The context api is used to pass the global varibles anywhere in the code. When there is need for sharing state between nested component. Context api is light in weight and easier to use. For using Context api no need to other dependencies or other third party libraries.  </p>

        </div>
    );
};

export default Blogs;