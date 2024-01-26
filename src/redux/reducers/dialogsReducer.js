const ADD_MESSAGE = "dialogs/ADD-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: "Sergey", avatar: "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png" },
        { id: 2, name: "Pasha", avatar: "https://cdn3.iconfinder.com/data/icons/animals-1-1/512/12-512.png" },
        { id: 3, name: "Kolya", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3D_fRyryvnYNSmEXRzDMaCJt0fhJiheSoqKWZECwe-ZIt9x5WijLc8Pym8NlORebBD8&usqp=CAU" },
        { id: 4, name: "Maxim", avatar: "https://m.covest.pro/images/copyprofile/49.png" },
    ],
    messages: [
        { id: 1, message: "Keep it up man", },
        { id: 2, message: "Heey how is it going?", },
        { id: 3, message: "Yeaaah man!Myzhiik", },
        { id: 4, message: "Sirozha priveeet ::::", },
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: action.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        }
        default:
            return state;
    }

}

export const addMessage = (formData) => {
    return {
        type: ADD_MESSAGE,
        newMessageText: formData.newMessageText,
    }
}

export default dialogsReducer;