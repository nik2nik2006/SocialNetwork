import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Yo', likeCount: 5},
        {id: 2, message: 'Yoklmn', likeCount: 4},
        {id: 3, message: 'Yoprst', likeCount: 23},
        {id: 4, message: 'Yoxoxo', likeCount: 0},
        {id: 5, message: 'Yoshkin kot', likeCount: 7},
    ],
};

it ('length off posts should be incremented', () => {
    let action = addPostActionCreator('IT-Kamasutra')
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(state.posts.length+1);

})

it ('message off new post should be correct', () => {
    let action = addPostActionCreator('IT-Kamasutra')
    let newState = profileReducer(state,action);
    expect(newState.posts[5].message).toBe('IT-Kamasutra');

})

it ('after deleting length of message should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(state.posts.length-1);

})

it (`after deleting length of message shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(100);
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(state.posts.length);
})

















