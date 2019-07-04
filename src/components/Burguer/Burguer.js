import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
// import Ingredient from "./Ingredient/Ingredient";

class Burguer extends Component {
  constructor(props) {
    super();
    this.state = {
      message: ""
    };
    this.props = props;
  }

  render() {
    const { message } = this.state;
    const { ingredients } = this.props;

    return (
      <div>
        <Typography className="title" component="h3" gutterBottom>
          ARMA TU HAMBURGUESA
        </Typography>
        <Typography className="caption" variant="caption" display="block" gutterBottom>
          {message}
        </Typography>
        {/* {ingredients && ingredients.map(ingredient => (
                    <Ingredient name={ingredient.name} url={ingredient.url} />
                ))} */}
      </div>
    );
  }
}
export default Burguer;
