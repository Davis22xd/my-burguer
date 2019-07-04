import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Item extends Component  {
    render(){
        const { image, price, name } = this.props
        return (
            <Paper className="item">
                <img src={image} alt={name} width="100px" />
                <Typography variant="h5" component="h3">
                    {name} - {price}
                </Typography>
            </Paper>
        );
    }
}

export default Item;
