import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
         <Navbar />
         {/* <ItemDetailContainer /> */}
         
          <Routes>
           <Route path='/' element={<ItemListContainer />}/>
           <Route path='/category/:categoryId' element={<ItemListContainer />}/>
           <Route path='/cart' element={<CartWidget />}/>
           <Route path='/detail/:detailId' element={<ItemDetailContainer />}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
