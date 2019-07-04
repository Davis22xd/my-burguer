import React from 'react';
import Item from './Items/Item';

const Panel = ({ingredients}) => (
    <div>
        {ingredients && ingredients.map(ingredient => (
            <Item name={ingredient.name} image={ingredient.image} price={ingredient.price} />
        ))}
    </div>
);
export default Panel;