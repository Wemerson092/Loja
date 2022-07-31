import React from 'react';

const CardProduto = ({img, titulo, description, price, handleAddItemToCart}) => {
    return (
        <div className='card'>
            <img className='img-produto' src={img} />
            <h1 className='card-titulo'>{titulo}</h1>         
            <h2>R${price.toFixed(2)}</h2>
            <p>{ description }</p>
            <button onClick={() => handleAddItemToCart(img, titulo, description, price)}>ADICIONAR</button>
        </div>
    )
}

export default CardProduto;
