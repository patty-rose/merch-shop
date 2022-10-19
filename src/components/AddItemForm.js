import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function AddItemForm(props){

  function handleAddItemFormSubmission(event) {
    event.preventDefault();
    props.onAddItemCreation({ 
      title: event.target.title.value, 
      price: parseInt(event.target.price.value), 
      description: event.target.description.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleAddItemFormSubmission}
        buttonText="Add Item" />
    </React.Fragment>
  );
}

AddItemForm.propTypes = {
  onAddItemCreation: PropTypes.func 
};

export default AddItemForm;