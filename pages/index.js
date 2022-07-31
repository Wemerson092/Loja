import React, { useState } from 'react';
import Carrinho from '../src/Carrinho';
import NavBar from '../src/NavBar';
import Produto from '../src/Produtos';

const Loja = () => {

  const [cart, setCart] = useState([]);

  function handleAddItemToCart(url, name, description, price) {
    const item = { url, name, description, price }
    setCart([...cart, item])
  }

  function handleRemoveItemFromCart(clickedItemIndex) {
    const filteredCart = cart.filter( 
      (cartItem) => cart.indexOf(cartItem) !== clickedItemIndex 
    );
    setCart(filteredCart)
  }

  function clearCart() {
    setCart([])
  }

  return (
    <div>
      <NavBar cart={cart} clearCart={clearCart}/>

      <Produto handleAddItemToCart={handleAddItemToCart}/>
      
      <Carrinho cart={cart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
    </div>
  )
}

export default Loja;

