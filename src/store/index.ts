import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';
import rootSaga from './sagas';

export const configureStore = () => {
    const persistConfig = {
        key: 'counter',
        storage,
        whitelist: ['counter'], // place to select which state you want to persist
    };

    const persistedReducer = persistReducer(persistConfig, reducers);

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        persistedReducer,
        /* preloadedState, */ composeEnhancers(applyMiddleware(...[sagaMiddleware]))
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

const composeEnhancers =
    (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
