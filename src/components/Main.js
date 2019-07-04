import React, { Component } from 'react';
import Burguer from './Burguer/Burguer';
import Panel from './Panel/Panel'

class Main extends Component {
    render() {
        return (
            <div>
                <div>
                    <Burguer />
                    <Panel />
                </div>
            </div>
        )
    }

}
export default Main;

