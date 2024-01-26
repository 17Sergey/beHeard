let initialState = {
    friends: [
        { id: 1, name: "Sergey", avatar: "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png" },
        { id: 2, name: "Pasha", avatar: "https://cdn3.iconfinder.com/data/icons/animals-1-1/512/12-512.png" },
        { id: 3, name: "Kolya", avatar: "https://cdn-icons-png.flaticon.com/512/3382/3382653.png" },
        { id: 4, name: "Maxim", avatar: "https://m.covest.pro/images/copyprofile/49.png" },
    ],
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;