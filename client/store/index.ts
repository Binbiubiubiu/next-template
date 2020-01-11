import { createStore, applyMiddleware, Store, Middleware, Reducer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootSaga from './sagas';
import { MakeStore } from 'next-redux-wrapper';

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function createBaseStore(rootReducer: Reducer, preloadedState: RootState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, preloadedState, bindMiddleware([sagaMiddleware]));
  sagaMiddleware.run(rootSaga);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (module as any).hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }
  return store;
}

const configureStore: MakeStore = (preloadedState, { isServer }) => {
  let store: Store<RootState>;

  if (isServer) {
    console.log('server state');
    store = createBaseStore(rootReducer, preloadedState);
  } else {
    console.log('client state');
    const persistConfig = {
      key: 'root',
      storage,
      whitelist: ['counter'], // place to select which state you want to persist
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    store = createBaseStore(persistedReducer, preloadedState);
  }

  return store;
};

export default configureStore;

export type RootState = ReturnType<typeof rootReducer>;
