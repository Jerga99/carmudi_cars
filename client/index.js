import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// Components
import App from './src/components/app';
import CarsMain from './src/components/cars_components/Cars_main';

//Styles
import './src/style/vendors/css/Grid.css';
import './src/style/vendors/css/normalize.css';
import './src/style/vendors/css/ionicons.min.css';
import './src/style/resources/sass/app.scss';

var store = require('./src/reducers/index').configure();

//store.dispatch(actions.fetchOffers()); //load initial data

// DEBUG
// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state', state);
// });

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component = {App}>
      <IndexRoute component = {CarsMain} />
    </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
