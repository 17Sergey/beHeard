import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/authAPI";

let SET_USER_AUTH = "auth/SET_USER_AUTH";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setUserAuth = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_AUTH,
        payload: { userId, email, login, isAuth }
    }
}

// Thunk creators

export const authorize = () => {
    return async (dispatch) => {
        const data = await authAPI.authorize();
        // Request successful
        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            let isAuth = true;
            dispatch(setUserAuth(id, email, login, isAuth));
        }

    }
}

export const logIn = (formData) => {
    return async (dispatch) => {
        const data = await authAPI.logIn(formData)
        if (data.resultCode === 0) {
            dispatch(authorize());
        }
        else {
            let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong. Try again"
            dispatch(stopSubmit("login", { _error: message }))
        }
    }
}

export const logOut = () => {
    return async (dispatch) => {
        const data = await authAPI.logOut();
        if (data.resultCode === 0) {
            dispatch(setUserAuth(null, null, null, false));
        }
    }
}

export default authReducer;