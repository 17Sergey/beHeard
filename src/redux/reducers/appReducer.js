import { authorize } from "./authReducer";

const SET_INITIALIZED = "app/SET_INITIALIZED";

const initialState = {
    initialized: false,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return { ...state, initialized: true }
        }
        default: {
            return state;
        }
    }
}

export const initializationSuccess = () => {
    return {
        type: SET_INITIALIZED,
    }
}

export const initializeApp = () => {
    return async (dispatch) => {
        setTimeout(() => {
            dispatch(authorize());
        }, 500)
        dispatch(initializationSuccess());
    }
}