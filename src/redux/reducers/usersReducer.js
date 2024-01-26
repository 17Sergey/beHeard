import { usersAPI } from "../../api/usersAPI";
import { updateObjectInArray } from "../../utils/objectHelpers";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE_NUMBER = "users/SET_CURRENT_PAGE_NUMBER";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_USERS_FETCHING = "users/TOGGLE_IS_USERS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "users/TOGGLE_FOLLOWING_IN_PROGRESS";

let initialState = {
    users: [],
    myUsers: [
        { id: 1, isFriend: false, fullname: "Sergey Kachaliuk", avatarUrl: "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png", status: "Let your dreams come true", location: { city: "Brest", country: "Belarus" } },
        { id: 2, isFriend: true, fullname: "Nikolay Ilyin", avatarUrl: "https://cdn-icons-png.flaticon.com/512/3382/3382653.png", status: "Gonna cry?", location: { city: "Grodno", country: "Belarus" } },
        { id: 3, isFriend: false, fullname: "Maxim Buchatsky", avatarUrl: "https://cdn3.iconfinder.com/data/icons/animals-1-1/512/12-512.png", status: "Sertified overthinker", location: { city: "Minsk", country: "Belarus" } },
        { id: 4, isFriend: true, fullname: "Pavel Pyasetskiy", avatarUrl: "https://m.covest.pro/images/copyprofile/49.png", status: "Heart of a lion", location: { city: "Minsk", country: "Belarus" } },
        { id: 5, isFriend: false, fullname: "Dominic Toretto", avatarUrl: "https://cdn-icons-png.flaticon.com/512/3382/3382653.png", status: "The most important thing in life will always be family", location: { city: "Los-Angeles", country: "USA" } },
        { id: 6, isFriend: true, fullname: "Scott Mccall", avatarUrl: "https://cdn-icons-png.flaticon.com/512/3382/3382653.png", status: "Because we don't run", location: { city: "Los-Angeles", country: "USA" } },
    ],
    pageSize: 5,
    totalUsersCount: 20,
    currentPageNumber: 1,
    isUsersFetching: true,
    followingInProgressUsers: [],
    followingInProgress: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return { ...state, users: [...action.users] };
        case SET_CURRENT_PAGE_NUMBER:
            return { ...state, currentPageNumber: action.currentPageNumber };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount };
        case TOGGLE_IS_USERS_FETCHING:
            return { ...state, isUsersFetching: action.isUsersFetching };
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgressUsers:
                    action.followingInProgress
                        ? [...state.followingInProgressUsers, action.userId]
                        : state.followingInProgressUsers.filter(id => id !== action.userId),
            };
        default:
            return state;
    }

}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPageNumber = (currentPageNumber) => ({ type: SET_CURRENT_PAGE_NUMBER, currentPageNumber });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const toggleIsUsersFetching = (isUsersFetching) => ({ type: TOGGLE_IS_USERS_FETCHING, isUsersFetching });
export const toggleFollowingInProgress = (followingInProgress, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, followingInProgress, userId });

// Thunk creators 

export const fetchUsers = (pageNumber, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsUsersFetching(true));
        dispatch(setCurrentPageNumber(pageNumber));

        const data = await usersAPI.getUsers(pageNumber, pageSize)

        dispatch(toggleIsUsersFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId));

    const data = await apiMethod(userId);
    if (data.resultCode === 0) dispatch(actionCreator(userId));

    dispatch(toggleFollowingInProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
}

export const unfollow = (userId) => {
    return async (dispatch) => followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
}

export default usersReducer;