import React from 'react';

const Ingredient = ({name, url}) => (<img src ={url} alt={name}/>);

Ingredient.protoTypes = {
    name: React.protoTypes.string.isRequired,
    url: React.protoTypes.string.isRequired
}

export default Ingredient;

