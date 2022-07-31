import React from 'react';
import RemoverCar from '../RemoverCar';

const Carrinho = ({ cart, handleRemoveItemFromCart }) => {
  return (
    <footer>
        <ul>
          {cart.map((Carrinho, index) => (
            <RemoverCar 
            key={index} 
            itemIndex={index}
            name={Carrinho.name} 
            price={Carrinho.price} 
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            />
          ))}
        </ul>
    </footer>
  )
}

export default Carrinho;
