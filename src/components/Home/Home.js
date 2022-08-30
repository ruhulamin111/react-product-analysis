import React from 'react';
import { useNavigate } from 'react-router-dom';
import useComments from "../../hooks/useComment";
import DisplayComment from '../Comment/DisplayComment';
import './Home.css'

const Home = () => {
    const [comments] = useComments();
    const navigate = useNavigate()

    return (
        <div>
            <div className='d-flex align-items-center justify-content-evenly vh-100'>
                <div>
                    <h2 className='fs-1 fw-bold'>Your Memories By Adorama</h2>
                    <p>For savings you won't find anywhere else and for weekly trending deals on top products from industry leading brands, browse Deals, Used, Deal Of The Day, only at Adorama.</p>
                    <button className='btn-info text-white p-3 rounded border-0'>Explore Now</button>
                </div>
                <div className='body'>
                    <img src="https://images.unsplash.com/photo-1628285348080-38683c1232be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGNhbWVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>
            <div>
                <h2 className='text-center my-4 text-info fw-bold '>Client Reviews</h2>
                <div className='comment-area'>{
                    comments.slice(0, 3).map(comment => <DisplayComment
                        key={comment.id}
                        comment={comment}
                    ></DisplayComment>)
                }
                </div>
                <div className='text-center my-4'>
                    <button onClick={() => navigate("/reviews")} className='btn-info p-3 rounded text-white text-center border-0' >See All Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;