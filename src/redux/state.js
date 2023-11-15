const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Yo', likeCount: 5},
                {id: 2, message: 'Yoklmn', likeCount: 4},
                {id: 3, message: 'Yoprst', likeCount: 23},
                {id: 4, message: 'Yoxoxo', likeCount: 0},
                {id: 5, message: 'Yoshkin kot', likeCount: 7},
            ],
            newPostText: 'введи сюда текст сообщения'
        },
        dialogPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Its your frend'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'Hi'},
                {id: 5, message: 'Hi'},
            ],
            newMessageText: 'введи сюда текст сообщения',
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Nikolay'},
                {id: 3, name: 'Sergey'},
                {id: 4, name: 'Misha'},
                {id: 5, name: 'Volodya'},
                {id: 6, name: 'Valera'},
            ],
        }
    },
    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likeCount: 9
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogPage.newMessageText
            };
            this._state.dialogPage.messages.push(newMessage);
            this._state.dialogPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT, newText: text
    })
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    })

export default store;

window.store = store;
