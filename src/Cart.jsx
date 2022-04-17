import React from "react";
export default function Cart(cart,RemovefromCart){

return (
<>
    <h1>Cart</h1>
    <div className='products'>
    {Cart.map((product,idx)=> 
    <div className="products" key={idx}>
    <h3>{product.name}</h3>
    <h4>{product.cost}</h4>
    <img src={product.image} alt={product.name}/>
    <button onClick={()=>RemovefromCart(product)}>Remove</button>
    </div>
    )}
    </div>
     </>
);
}