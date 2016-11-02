import * as redux from 'redux';
import thunk from 'redux-thunk';

export var configure = (initialState = {}) => {

  const reducer = redux.combineReducers({
    // data: comingFromReducerData
  });

  var store = redux.createStore(reducer, initialState,
      redux.compose(
          redux.applyMiddleware(thunk),
          window.devToolsExtension ? window.devToolsExtension() : f => f
      ));

  return store;
};
