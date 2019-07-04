import React from 'react';

import Item from './Items/Item';

const Panel = ({ ingredients }) => (
    <div className="">
        {ingredients && ingredients.map(ingredient => {
            if (ingredient.visible) {
                return (
                    <Item
                        name={ingredient.name}
                        image={ingredient.image}
                        price={ingredient.price}
                    />
                );
            } else return null;
        })}
    </div>
);
export default Panel;