import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://w.forfun.com/fetch/1b/1bad518cb3c774425a453b16f6e9ce92.jpeg' alt='типа рисунок'/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large}/>
                    {props.profile.fullName}
                    {props.profile.lookingForAJobDescription}
                    {props.profile.contacts.facebook}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;