
import React from 'react';

import NewProduct from './components/NewProduct';
import Products from './components/Products';


  const App = () => {
    const products = [
   { 
    id:'p1',
    title:'Nirma',
    amount:100,
    date: new Date(2021, 8, 10),
  },
  { 
    id:'p2',
    title:'Surf Excel',
    amount:200,
    date: new Date(2022, 8, 10),
  },
  { 
    id:'p3',
    title:'Tide',
    amount:300,
    date: new Date(2023, 8, 10),
  },
  {
     id:'p4',
    title:'Maggi',
    amount:400,
    date: new Date(2024, 8, 10),
  },
    ];
  
    function printProductData(data){
      console.log("I am inside App.js")
      console.log(data)
    }
  return (
    
    <div>
      <NewProduct pranay={printProductData}/>
      <Products items={products}/>
    
    </div>
  );
}

export default App;
