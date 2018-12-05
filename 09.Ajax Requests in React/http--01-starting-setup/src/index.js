import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


//WE CAN SET A DEFAULT URL FOR ALL REQUSETS
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";


//WE CAN ALSO SET UP CONFIGURATIONS AND DEFAULT HEADERS FOR OUR APP:
axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";
axios.defaults.headers.post['Content-type'] = "application/json";


//WE CAN CREATE OTHER INSTANCES FOR DEFERENT PARTS OF THE APP AND SET THEIR OWN CONFIGURATIONS !!!


//REGISTER AN INTERCEPTOR, THIS IS A GLOBAL FUNCTION WHICH EXECUTES CODE FOR EVERY REQUEST OR RESPONCE IN OUR APP.
let requestInterceptor = axios.interceptors.request.use(request => {

    console.log('REQUESTS INTERCEPTOR');
    //we receive every request here     
    console.log(request)
    //WE have to return the request otherwise we are blocking it
    return request;
}, error => {
    //We add another function to the interceptor to handle errors
    console.log(error);
    return Promise.reject(error);
});


//WE CAN ALSO SET AN INTERCEPTOR TO HANDLE EVERY RESPONSE IN OUR APP, HERE WE CAN TRACK EVERY RESPONCE THE SAME WAY
let responceInterceptor = axios.interceptors.response.use(response => {

    console.log('RESPONSE INTERCEPTOR');
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});


//REMOVE AN INTERCEPTOR IS EASY, WE JUST HAVE TO EJECT IT LIKE THIS :
axios.interceptors.request.eject(requestInterceptor);
axios.interceptors.response.eject(responceInterceptor);



ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();


