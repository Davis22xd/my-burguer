import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Item extends Component  {
    constructor(props) {
        super(props);
        this.state = {
          isChecked: true,
        };
      }
      toggleChange = () => {
        // this.setState({
        //   isChecked: !this.state.isChecked,
        // });
      }
    render(){
        const { image, price, name } = this.props
        return (
            <Paper className="item">
                <Typography variant="h5" component="h3">
                <img src={image} alt={name} width="100px" />
                    {name} - {price}
                    <Checkbox
                        checked={true}
                        onChange={this.toggleChange()}
                        value="checkedA"
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    />
                </Typography>
            </Paper>
        );
    }
}

export default Item;
