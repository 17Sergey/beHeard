import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
import { thunk } from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from "./reducers/authReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import usersReducer from "./reducers/usersReducer";
import { appReducer } from "./reducers/appReducer";

let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
}); 

// let store = legacy_createStore(reducers, applyMiddleware(thunk));

const store = legacy_createStore( reducers, composeWithDevTools( applyMiddleware(thunk) ) );

window.store = store;

export default store;