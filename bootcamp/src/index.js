import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import firebase from 'firebase/compat/app';
import { createStore, combineReducers } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDx7GhEGi1IN0Hip45Vli2uTZnJ-OMrAWY",
    authDomain: "bootcamp-8c097.firebaseapp.com",
    databaseURL: "https://bootcamp-8c097-default-rtdb.firebaseio.com",
    projectId: "bootcamp-8c097",
    storageBucket: "bootcamp-8c097.appspot.com",
    messagingSenderId: "402195195682",
    appId: "1:402195195682:web:dc0951c4b1f4f64755277b"
  }; 
  firebase.initializeApp(firebaseConfig);
  
  // Add firebase to reducers
  const rootReducer = combineReducers({
    firebase: firebaseReducer,
  });
  
  // Create store with reducers and initial state
  const store = createStore(rootReducer);
  
  // react-redux-firebase config
  const rrfConfig = {
    userProfile: 'users',
  };
  
  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
  };
  
  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'),
  );