import React from 'react';
import ItemList from './ItemList';
import AddItemForm from './AddItemForm';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';

class ShopControl extends React.Component {

  //constructor with props declared:
  constructor(props) {
    super(props);
    this.state = {
      mainItemList: [],
      formVisible: false,
      selectedItem: null,
      editing: false,
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

  handleEditingItemInList = (itemToEdit) => {
    const editedMainItemList = this.state.mainItemList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
        mainItemList: editedMainItemList,
        editing: false,
        selectedItem: null
      });
  }

  handleDeletingItem = (id) => {
    const newMainItemList = this.state.mainItemList.filter(item => item.id !== id);
    this.setState({
      mainItemList: newMainItemList,
      selectedItem: null
    });
  }
  
  //rendering:
  render(){
    let currentlyVisibleState = null;
    if (this.state.editing){
      currentlyVisibleState = <EditItemForm item = {this.state.selectedItem} onEditItem = {this.handleEditingItemInList} />
    } else if (this.state.selectedItem != null){
      currentlyVisibleState = <ItemDetail item = {this.state.selectedItem} onClickingDelete = {this.handleDeletingItem} onClickingEdit = {this.handleEditingItemInList} />
    } else if (this.state.formVisible){
      currentlyVisibleState = <AddItemForm onAddItemCreation={this.handleAddItemToShop} />;
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.mainItemList} onItemSelection={this.handleChangingSelectedItem}/>;
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