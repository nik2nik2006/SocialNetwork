const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, message: 'Yo', likeCount: 5},
        {id: 2, message: 'Yoklmn', likeCount: 4},
        {id: 3, message: 'Yoprst', likeCount: 23},
        {id: 4, message: 'Yoxoxo', likeCount: 0},
        {id: 5, message: 'Yoshkin kot', likeCount: 7},
    ],
    newPostText: '',
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 6, message: state.newPostText, likeCount: 9}],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})


export default profileReducer;