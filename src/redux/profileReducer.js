import {profileAPI} from "../api/api";
import {toggleFollowingProgress, unfollowSuccess} from "./usersReducer";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';



let initialState = {
    posts: [
        {id: 1, message: 'Yo', likeCount: 5},
        {id: 2, message: 'Yoklmn', likeCount: 4},
        {id: 3, message: 'Yoprst', likeCount: 23},
        {id: 4, message: 'Yoxoxo', likeCount: 0},
        {id: 5, message: 'Yoshkin kot', likeCount: 7},
    ],
    profile: null,
    status: ""
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 6, message: action.newPostText, likeCount: 9}]
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
}


export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE,  profile});
export const setStatus = (status) => ({ type: SET_STATUS,  status});
export const deletePost = (postId) => ({ type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos});

export const getProfile = (userId) => async (dispatch) => {
        const data = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(data));
}
export const getStatus = (userId) => async (dispatch) => {
        const response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
        const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        };
}
export const savePhoto = (file) => async (dispatch) => {
        const response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        };
}
export const saveProfile = (profile) => async (dispatch, getState) => {
        const userId = getState().auth.userId
        const response = await profileAPI.saveProfile(profile);
        if (response.data.resultCode === 0) {
            dispatch(getProfile(userId));
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Same error";
            dispatch(stopSubmit('edit-profile', {"_error": message}));
            return Promise.reject(message);
        };
}



export default profileReducer;

















