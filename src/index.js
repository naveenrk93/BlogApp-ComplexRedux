import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import ReduxPromise from 'redux-promise'

import PostsIndex from './components/posts-index';
import reducers from './reducers';
import PostNew from './components/post-new';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
              <Route exact path="/posts/new" component={PostNew} />
              <Route exact path="/" component={PostsIndex} />
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
