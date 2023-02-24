import React from 'react';
import Item from '../Item/Item';

const ItemList = ({data=[]}) => {
    return (
     data.map(mueble=><Item key={mueble.id} info={mueble} />)  
    );
};

export default ItemList;