import React, { useState } from "react";
export default function Products({addToCart}){
    const[products]=useState([
        {
      name:'AA Baterry',
      cost:'$3.99',
      image:'https://apexammo.bz/wp-content/uploads/2017/06/Apex-SportingGoods-Lights-Nitecore-650mAh-IMR14500-NI14500A-AABattery.jpg',
      },
      {
        name:'blanket',
        cost:'$25.99',
        image:'https://avatars.mds.yandex.net/i?id=15ab6c33066f44c25be8ac8fd9fbb677-5875861-images-thumbs&n=13',
      }
      ]);
      
return(
    <>
 <h1>Products</h1>
      <div className='products'>
      {products.map((product,idx)=> 
      <div className="products" key={idx}>
      <h3>{product.name}</h3>
      <h4>{product.cost}</h4>
      <img src={product.image} alt={product.name}/>
      <button onClick={()=>addToCart(product)} sty="height:40px; width:40px;">add to cart</button>
      </div>
       )}
       </div>
</>
);
}



