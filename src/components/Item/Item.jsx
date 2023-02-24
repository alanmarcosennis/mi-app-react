import './item.css';

import React from 'react';

import { Link } from 'react-router-dom';

const Item = ({info}) => {
    return (
       <div className="container">
        <Link to={`/detail/${info.id}`} className="mueble">
       <img src={info.image} />
       <p>{info.title}</p>
       
   </Link>
   </div>
    );
};


export default Item;