import { createStore, compose } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

// need the default data
// import comments from './data/comments';
// import posts from './data/posts';

// create an object for the default data
const defaultState = {
  loggedIn: false,
};

// this is to add to our redux dev tools
/* eslint-disable no-underscore-dangle */
const enhancer =
    typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;
/* eslint-enable */

const store = createStore(rootReducer, defaultState, enhancer);

// if (module.hot) {
//   module.hot.accept('./reducers/', () => {
//     const nextRootReducer = require('./reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export default store;
