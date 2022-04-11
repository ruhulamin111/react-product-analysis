import useComments from "../../hooks/useComment";
import DisplayComment from "../Comment/DisplayComment";
import './Review.css'


const Review = () => {
    const [comments, setComments] = useComments()

    return (
        <div className="comment-area ">
            {
                comments.map(comment => <DisplayComment
                    key={comment.id}
                    comment={comment}
                ></DisplayComment>)
            }
        </div>
    );
};

export default Review;