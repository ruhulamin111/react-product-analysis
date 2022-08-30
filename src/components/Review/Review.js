import useComments from "../../hooks/useComment";
import DisplayComment from "../Comment/DisplayComment";
import './Review.css'

const Review = () => {
    const [comments] = useComments()

    return (
        <div>
            <h2 className='text-center my-4 text-info fw-bold '>Client Reviews</h2>
            <div className="comment-area">
                {
                    comments.map(comment => <DisplayComment
                        key={comment.id}
                        comment={comment}
                    ></DisplayComment>)
                }
            </div>
        </div>
    );
};

export default Review;