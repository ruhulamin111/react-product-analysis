import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='d-flex align-items-center body justify-content-evenly'>
                <div>
                    <h2 className='fs-1 fw-bold'>Your Memories By Adorama</h2>
                    <p>For savings you won't find anywhere else and for weekly trending deals on top products from industry leading brands, browse Deals, Used, Deal Of The Day, only at Adorama.</p>
                    <button className='btn-primary p-2 rounded-pill border-0'>Explore Now</button>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1628285348080-38683c1232be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGNhbWVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>
            <div>
                <button className='btn-primary p-2 rounded-pill border-0'>All Review</button>
            </div>
        </div>
    );
};

export default Home;