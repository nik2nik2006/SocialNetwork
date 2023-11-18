import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


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
            newPostText: ''
        },
        dialogPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Its your frend'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'Hi'},
                {id: 5, message: 'Hi'},
            ],
            newMessageBody: '',
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Nikolay'},
                {id: 3, name: 'Sergey'},
                {id: 4, name: 'Misha'},
                {id: 5, name: 'Volodya'},
                {id: 6, name: 'Valera'},
            ],
        },
        sidebar: {},
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;
