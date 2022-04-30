import React from 'react'
import CHEF_DETAILS from './Global';
import {AsyncStorage } from 'react-native';



export async function getUser(){
    const userid = await AsyncStorage.getItem('userlogin');
    var details = {
      'userId':userid
     };
     var formBody = [];
     for (var property in details) {
     var encodedKey = encodeURIComponent(property);
     var encodedValue = encodeURIComponent(details[property]);
     formBody.push(encodedKey + "=" + encodedValue);
     }
     formBody = formBody.join("&")
     
     return fetch(CHEF_DETAILS, {
        method: 'POST',
        headers: {
        'Content-Type':'application/x-www-form-urlencoded'
        },
        body: formBody
        })
      .then(response => Promise.all([response, response.json()]))
      .then(([response, responseObj]) => {
       alert(JSON.stringify(response));
       alert(JSON.stringify(responseObj));
        return [response, responseObj];
      })
      .catch(err => {
        console.log("error catch search:", err.message);
        fetching = false;
        // Choose one, depends what you need.
        return false; // If you want to ignore the error and do something in a chained .then()
        return Promise.reject(err); // If you want to handle the error in a chained .catch()
      })

}


export function getDishBychef(){
  
}