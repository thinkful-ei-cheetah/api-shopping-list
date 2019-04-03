'use strict';

const api = (function(){

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/verdi';
 
  const getItems = function(){
    return Promise.resolve('it was successful');
  };
  
  return {
    getItems
  };

}());