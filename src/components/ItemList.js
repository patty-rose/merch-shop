import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props){
  return(
    <React.Fragment>
      {props.itemList.map((item) =>
        <Item
          whenItemClicked = { props.onItemSelection }
          title={item.title}
          price={item.price}
          description={item.description}
          id={item.id}
          key={item.id}/>
      )}
    </React.Fragment>
  )
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
}

export default ItemList;