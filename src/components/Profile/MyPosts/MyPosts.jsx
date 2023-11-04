import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message = 'Yo' likeCount='5'/>
                <Post message = 'Yoklmn' likeCount='4'/>
                <Post message = 'Yoprst' likeCount='6'/>
                <Post message = 'Yoxoxo' likeCount='8'/>
                <Post message = 'Yoshkin kot' likeCount='3'/>
            </div>
        </div>
    )
}

export default MyPosts;