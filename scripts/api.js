'use strict';


const api = (function(){

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/verdi';
 
  const getItems = function(){
    return fetch(`${BASE_URL}/items`);
  };

  const createItem = function(name){
    const newItem = {name};
    const stringifiedItem = JSON.stringify(newItem);

    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: stringifiedItem
    });
  };

  const updateItem = function(id, updateData) {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateData)
    });
  };
  
  return {
    getItems,
    createItem,
    updateItem
  };

}());