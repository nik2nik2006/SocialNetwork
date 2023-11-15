const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


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
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Nikolay'},
                {id: 3, name: 'Sergey'},
                {id: 4, name: 'Misha'},
                {id: 5, name: 'Volodya'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Its your frend'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'Hi'},
                {id: 5, message: 'Hi'},
            ],
            newMessageBody: '',
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
        else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.newMessageText = '';
            this._state.dialogPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT, newText: text
    })
export const sendMessageCreator = () => ({ type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: text
    })

export default store;

window.store = store;
