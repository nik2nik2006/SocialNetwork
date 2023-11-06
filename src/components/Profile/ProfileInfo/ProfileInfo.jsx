import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src='https://w.forfun.com/fetch/1b/1bad518cb3c774425a453b16f6e9ce92.jpeg' alt='типа рисунок'/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;