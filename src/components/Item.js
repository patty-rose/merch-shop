import React from "react";
import PropTypes from"prop-types";

function Item(props){
  return(
    <React.Fragment>
      <h3> ITEM TITLE</h3>
      <h4> PRICE </h4>
      <p>DESCRIPTION</p>
    </React.Fragment>
  )
}

Item.propTypes = {
  title : PropTypes.string,
  price : PropTypes.number,
  description : PropTypes.string,
  id : PropTypes.string
};

export default Item;