import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.img}>
            <div >
                <img src='https://w.forfun.com/fetch/1b/1bad518cb3c774425a453b16f6e9ce92.jpeg'/>
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts name='yo'/>
        </div>
    )
}

export default Profile;