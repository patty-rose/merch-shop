import React from 'react';
import ItemList from './ItemList';
import AddItemForm from './AddItemForm';

class ShopControl extends React.Component {

  //constructor with props declared:
  constructor(props) {
    super(props);
    this.state = {
      mainItemList: [],
      formVisible: false
    }
  }

  //functions for rendering
  handleAddItemClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
    console.log(this.state.formVisible);
  }

  handleAddItemToShop = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      mainItemList: newMainItemList,
      formVisible: false 
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }
  
  //rendering:
  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisible){
      currentlyVisibleState = <AddItemForm onAddItemCreation={this.handleAddItemToShop} />;
    } else {
      currentlyVisibleState = <ItemList itemList = {this.state.mainItemList} />;
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleAddItemClick}>Add Item</button>
      </React.Fragment>
    );
  }
}

export default ShopControl;