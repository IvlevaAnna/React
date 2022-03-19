import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

import {profileReducer} from "./profile/reducer";
import {chatsReducer} from "./chats/reducer";
import {messagesReducer} from "./messages/reducer";
import {holidaysReducer} from "./holidays/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
    key: 'messenger',
    storage
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    holidays: holidaysReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)))


export const persistor = persistStore(store)
