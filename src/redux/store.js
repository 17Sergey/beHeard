import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "Hi! Yeah, thanks, I'm fine! Was working pretty much.How are you?", likesCount: 2, },
                { id: 2, message: "Are you okay? Not online for a long time...", likesCount: 3, },
                { id: 3, message: "Heeeeey! What's going on?", likesCount: 5, },
                { id: 4, message: "Idea! What if all my dreams come true?", likesCount: 3, },
            ],
            newPostText: "",
        },
        dialogsPage: {
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
            newMessageText: "",
        },
        sidebar: {
            friends: [
                { id: 1, name: "Sergey", avatar: "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png" },
                { id: 2, name: "Pasha", avatar: "https://cdn3.iconfinder.com/data/icons/animals-1-1/512/12-512.png" },
                { id: 3, name: "Kolya", avatar: "https://cdn-icons-png.flaticon.com/512/3382/3382653.png" },
                { id: 4, name: "Maxim", avatar: "https://m.covest.pro/images/copyprofile/49.png" },
            ],
        },
    },
    _callSubscriber(state) { },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;