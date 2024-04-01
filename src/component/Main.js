// Main.js
import React from 'react';
import Products from './Products';
import { fruits } from './data/fruits'; 

const Main = () => {
  return (
    <main>
      <Products fruits={fruits} />
    </main>
  );
};

export default Main;
