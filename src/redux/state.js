let rerenderEntireTree = () => {
    console.log('State was changed')
}

let state = {
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
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likeCount: 9
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;