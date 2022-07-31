import React from 'react';

const RemoverCar = ({name, price, itemIndex,  handleRemoveItemFromCart}) => {
    return (
        <li>
            <h2>{name}</h2>
            <span>R$ {price}</span>
            <button onClick={() => handleRemoveItemFromCart(itemIndex)}>REMOVER</button>
        </li>
    )
}

export default RemoverCar;
