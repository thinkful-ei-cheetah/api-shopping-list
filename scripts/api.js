'use strict';


const api = (function(){

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/verdi';
 
  const fetchList = function(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = {code: res.status};
        }
        return res.json();
      })
      .then(jsonData => {
        if (error) {
          error.message = jsonData.message;
          return Promise.reject(error);
        }
        return jsonData;
      });
  };
  
  const getItems = function(){
    return fetchList(`${BASE_URL}/items`);
  };

  const createItem = function(name){
    const newItem = {name};
    const stringifiedItem = JSON.stringify(newItem);

    return fetchList(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: stringifiedItem
    });
  };

  const updateItem = function(id, updateData) {
    return fetchList(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateData)
    });
  };

  const deleteItem = function(id) {
    return fetchList(`${BASE_URL}/items/${id}`, {method: 'DELETE'});
  };
  
  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };

}());