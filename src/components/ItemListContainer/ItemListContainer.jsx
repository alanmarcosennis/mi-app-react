import './itemlist.css';
import React, {useState, useEffect} from 'react';

import Title from '../Title/title';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const muebles = [
    {id: 1, image: "https://silloneseuropa.com.ar/wp-content/uploads/2020/05/oxford1.jpg", category:"sillones",title: "sillon"},
    {id: 2, image: "https://tiendadealgarrobo.com/wp-content/uploads/2019/12/20191212_134642-scaled.jpg", category:"muebles",title:"mesaysillas"},
    {id: 3, image:"https://www.dealgarrobo.com/img/ma/foto_159_110.jpg", category:"muebles",title:"muebletv"},
    {id: 4, image:"https://http2.mlstatic.com/D_NQ_NP_617560-MLA50723199022_072022-O.webp", category:"sillones", title:"silloncama"},
    {id: 5, image:"https://www.dealgarrobo.com/img/upload/imagen_small_96.jpg", category:"muebles",title:"mesaratona"}
];

export const ItemListContainer = () => {
     const [data, setData]= useState([]);


     const {categoryId} = useParams()

     useEffect (() => {
        const getData= new Promise(resolve=>{
            setTimeout(() => {
                resolve(muebles);
            }, 1000);
        })
        if (categoryId) {
            
            getData.then (res => setData(res.filter (mueble=>mueble.category === categoryId)));
            
        }else{
            getData.then(res=>setData(res))

        }
        
     }, [categoryId])
     
     function onAdd(quantity) {
        console.log(`agregaste ${quantity} unidades al carrito`);
    }
     
     return (
        <>
          <div className='itemlista'>
            <Title greeting='Hola! Bienvenido' />
            
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data} />

        </div>
        </>
      
    );
};

export default ItemListContainer;