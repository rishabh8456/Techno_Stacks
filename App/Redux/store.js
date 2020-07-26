import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer, } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import dataFetchReducer from './Reducer/fetchAPIReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const middleware = applyMiddleware(thunk);

const persistedReducer = persistReducer(persistConfig, dataFetchReducer)

const configureStore = () => {
    let store = createStore(persistedReducer, middleware)
    let persistor = persistStore(store)
    return { store, persistor }
};

export default configureStore;









