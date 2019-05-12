import React, { Component } from "react";
import "./Search.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

class Search extends Component {
  state = {
    visibility: false
  };

  render() {
    console.log(this.state);
    console.log("stateval" + this.state.value);
    var handleClick = () => {
      this.setState({
        visibility: !this.state.visibility
      });
    };

    const changeText = this.state.visibility ? "Collapse" : "Learn More";

    return (
      <Card className="Search">
        <p className="itemname">{this.props.name} pie</p>
        <p className="store">{this.props.storename}</p>
        <p>
          <strong>Price: </strong>
          {this.props.price}
        </p>
        <p className={this.state.visibility ? "show" : "hide"}>
          <strong>Quantity: </strong>
          {this.props.quantity}
        </p>
        <p className={this.state.visibility ? "show" : "hide"}>
          <strong>Address: </strong>
          {this.props.address}
        </p>
        <p className={this.state.visibility ? "show" : "hide"}>
          <strong>Rating: </strong>
          {this.props.rating} out of 10
        </p>
        <p className={this.state.visibility ? "show" : "hide"}>
          <strong>Contact Number: </strong>
          {this.props.contact}
        </p>

        <CardActions>
          <Button id="btn" size="small" onClick={handleClick}>
            {changeText}
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Search;
