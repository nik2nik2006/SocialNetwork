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
    getState() {
        return this._state;
    },
    _callSubscrider() {
        console.log('State was changed')
    },
    addPost() {
        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likeCount: 9
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscrider(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscrider(this._state)
    },
    subscribe(observer) {
        this._callSubscrider = observer;
    },
}

export default store;

window.store = store;
