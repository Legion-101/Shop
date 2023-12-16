import React, { useState } from 'react';
import './App.css';
import { MainLayout } from './containers/MainLayout';
import { ShopsContext } from './context';
import { IProduct, IShop } from './types';

function App() {
  const [shops, setShops] = useState<IShop[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  return (
    <ShopsContext.Provider value={{shops, products, setShops, setProducts}}>
      <MainLayout />
    </ShopsContext.Provider>
    
  );
}

export default App;
