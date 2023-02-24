import './itemdetailcontainer.css'

import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const muebles = [
    {id: 1, image: "https://silloneseuropa.com.ar/wp-content/uploads/2020/05/oxford1.jpg", category:"sillones",title: "Sillon grande"},
    {id: 2, image: "https://tiendadealgarrobo.com/wp-content/uploads/2019/12/20191212_134642-scaled.jpg", category:"muebles",title:"Mesa y sillas"},
    {id: 3, image:"https://www.dealgarrobo.com/img/ma/foto_159_110.jpg", category:"muebles",title:"Mueble"},
    {id: 4, image:"https://http2.mlstatic.com/D_NQ_NP_617560-MLA50723199022_072022-O.webp", category:"sillones", title:"Sillon Cama"},
    {id: 5, image:"https://www.dealgarrobo.com/img/upload/imagen_small_96.jpg", category:"muebles",title:"Mesa Ratona"}
];

const ItemDetailContainer = () => {
    const [data, setData]= useState([]);

    const {detailId} = useParams();

    useEffect (() => {
        const getData= new Promise(resolve=>{
            setTimeout(() => {
                resolve(muebles);
            }, 1000);
        })
        getData.then(res=>setData(res.find (mueble=>mueble.id === parseInt(detailId))));

     }, [])


    return (
      <ItemDetail data={data} />
    );
};

export default ItemDetailContainer;