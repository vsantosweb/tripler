import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import TripBagReducer from './pages/TripBag/redux';
import CartReducer from './resources/modules/Cart/redux';


const reducers = combineReducers({
    tripBag: TripBagReducer,
    cart: CartReducer
});

const persistConfig = {
    key: 'app',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, undefined, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };