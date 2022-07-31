import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa'

const NavBar = ({ cart, clearCart }) => {

  const totalPrice = cart.reduce((acc, current)=> acc + current.price, 0)

  return (
    <header>
        <nav>
          <h2 className='logo'>Loja</h2>
          <div className='nav-bar'>
            <div className='nav-bar-itens'>
              <span>{cart.length} {cart.length <= 1 ? "produto" : "produtos"}</span>
              <span className='nav-price'> R$ {totalPrice.toFixed(2)}</span>
            </div>      
            <button className='nav-btn' onClick={() => clearCart()}><FaRegTrashAlt/></button>
          </div>  
        </nav>
      </header>
  )
}

export default NavBar;
