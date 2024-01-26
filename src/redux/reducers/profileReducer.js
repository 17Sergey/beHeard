import { profileAPI } from "../../api/profileAPI";

const ADD_POST = "profile/ADD_POST";
const DELETE_POST = "profile/DELETE_POST";
const ADD_LIKE = "profile/ADD_LIKE";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_PROFILE_STATUS = "profile/SET_PROFILE_STATUS";

let initialState = {
    profile: null,
    status: null,
    postsData: [
        { id: 0, message: "Hi! Yeah, thanks, I'm fine! Was working pretty much.How are you?", likesCount: 2, },
        { id: 1, message: "Are you okay? Not online for a long time...", likesCount: 3, },
        { id: 2, message: "Heeeeey! What's going on?", likesCount: 5, },
        { id: 3, message: "Idea! What if all my dreams come true?", likesCount: 3, },
    ],
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case ADD_POST: {
            let newPost = {
                id: state.profile.userId,
                message: action.newPost.newPostText,
                likesCount: 0,
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id !== action.postId)
            };
        }
        case ADD_LIKE: {
            const updatedPost = {
                ...state.postsData[action.postId],
                likesCount: state.postsData[action.postId].likesCount + 1,
            }

            const newPostsData = [...state.postsData];
            newPostsData[action.postId] = updatedPost;

            return { ...state, postsData: newPostsData }
        }
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        default:
            return state;
    }

}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}

export const setProfileStatus = (status) => {
    return {
        type: SET_PROFILE_STATUS,
        status,
    }
}

export const addPostActionCreator = (newPost) => {
    return {
        type: ADD_POST,
        newPost,
    }
}

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId,
    }
}

export const addLike = (postId) => {
    return {
        type: ADD_LIKE,
        postId,
    }
}

// Thunk creators

export const getProfile = (userId) => {
    return async (dispatch) => {
        const profileResponse = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(profileResponse.data));

        const statusResponse = await profileAPI.getStatus(userId)
        dispatch(setProfileStatus(statusResponse.data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) dispatch(setProfileStatus(status));
    }
}

export default profileReducer;