import React, { Component } from 'react';
import Burguer from './Burguer/Burguer';
import ingredients from '../data/ingredients';

class Main extends Component {
    render() {
        return (
            <div>
                <div>
                    <Burguer ingredients={ingredients}/>
                </div>
            </div>
        )
    }

}
export default Main;

