import {profileAPI} from "../api/api";
import {toggleFollowingProgress, unfollowSuccess} from "./usersReducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


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
        default:
            return state;
    }
}


export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE,  profile})
export const setStatus = (status) => ({ type: SET_STATUS,  status})

export const getProfile = (userId) => {
    return (dispatch) => {
        console.log(userId);
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        console.log(userId);
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        console.log(status);
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        });
    }
}


export default profileReducer;