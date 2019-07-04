import React, { Component } from 'react';
import Burguer from './Burguer/Burguer';
import Panel from './Panel/Panel'
import ingredients from '../data/ingredients';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="burguer">
                    <Burguer ingredients={ingredients} />
                </div>
                <div className="panel">
                    <Panel ingredients={ingredients}/>
                </div>
            </div>
        )
    }

}
export default Main;

