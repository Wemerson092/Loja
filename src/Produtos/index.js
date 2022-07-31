import React from 'react';
import CardProduto from '../CardProdutos';
import { produtos  } from '../../database';

const Produto = ({ handleAddItemToCart }) => {
  return (
    <main>
        <section className='area-produto'> 
            {produtos.map((produtos, index) => (
              <CardProduto img={produtos.url} titulo={produtos.name} description={produtos.description} price={produtos.price}
              handleAddItemToCart={handleAddItemToCart}
              />         
            ))}
                   
        </section>
    </main>
  )
}

export default Produto;
