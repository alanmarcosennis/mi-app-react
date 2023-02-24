import './itemdetail.css'

import React from 'react';


const ItemDetail = ({data}) => {
    return (
       <div className="container">
        <div className="detail">
            <img className='image_detail' src={data.image} alt="" />
            <div className="content">
                <h1>{data.title}</h1>
            </div>
        </div>
       </div>
    );
};

export default ItemDetail;