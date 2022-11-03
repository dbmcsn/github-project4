import React from "react";
import "./ItemBox.css";
import NewItem from "./NewItem";

const ItemBox = ({
  id,
  name,
  price,
  image,
  showEditItemForm,
  editItem,
  dispatch,
  newItem
}) => {
  return (
    <div className="Item">
      <div>
        <img src={image} alt="Image" className="icons"/>
      </div>
      <div>
        <strong>{name}</strong>
        <p>
          <small>$ {price}</small>
        </p>
        <p>
          <button className="itemBtn" onClick={() => dispatch ({type: 'ADD_CART', payload: {id: id}})}>Order</button>
          <br />
          {editItem || newItem ? (
            ""
          ) : (
            <button className="itemBtn" onClick={ () => showEditItemForm (true, id) }>Edit</button>
          )}
          <br />
          <button className="itemBtn" onClick={() => dispatch ({type: 'DELETE_LIST', payload: {id: id}})}>Delete</button>
        </p>
      </div>
    </div>
  );
};

export default ItemBox;
