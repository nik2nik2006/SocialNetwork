const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};


const dialogsReducer = (state= initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;



