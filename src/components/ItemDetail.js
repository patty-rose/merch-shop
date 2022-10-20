import React from "react";
import PropTypes from"prop-types";

function ItemDetail(props){
  const { item, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h1> Item Detail </h1>
      <h3> {item.title} - ${ item.price } </h3>
      <p>{item.description}</p>
      <button onClick = {props.onClickingEdit}>Edit Item</button>
      <button onClick = {()=> onClickingDelete(item.id)}>Delete Item</button>
      {/* <button onClick = {props.onClickingAddToCart(item.id)}>Add To Cart</button> */}
    </React.Fragment>
  )
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete : PropTypes.func,
  onClickingEdit : PropTypes.func,
  // onClickingAddToCart : PropTypes.func
}
export default ItemDetail;