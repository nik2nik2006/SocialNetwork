import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/img/user_img.jpg";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://w.forfun.com/fetch/1b/1bad518cb3c774425a453b16f6e9ce92.jpeg' alt='типа рисунок'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
                         alt='типа рисунок' className={s.image}/>
                </div>
                <div>
                    {props.profile.fullName}
                    {props.profile.lookingForAJobDescription}
                    {props.profile.contacts.facebook}
                </div>
                <div>
                    <ProfileStatus />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;












