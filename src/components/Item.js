import React from "react";
import PropTypes from"prop-types";

function Item(props){ //for this component-- think of it like a class. We are essentially declaring a JSX (JS/HTML) constructor for a merch item to sell and list in our shop. Below is how the item will display in html:
  return(
    <React.Fragment>
      <h3>{ props.title }</h3>
      <h4> { props.price } </h4>
      <p>{ props.description}</p>
    </React.Fragment>
  )
}

Item.propTypes = { //and here is where we declare the parameters for the 'Item' class -- it takes all of these as an argument when you call on it in it's parent component in the render section. It's parent component is ItemList.. so in Item list you will see <Item parameters.. /> in the render section.
  title : PropTypes.string,
  price : PropTypes.number,
  description : PropTypes.string,
  id : PropTypes.string
};

export default Item;