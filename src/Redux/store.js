import { createStore, applyMiddleware , compose} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './RootReducer';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);
const persistedReducer = persistReducer(persistConfig, rootReducer)


    const store = createStore(persistedReducer, composeEnhancers(middleware));
    let persistor = persistStore(store)

export { store, persistor }