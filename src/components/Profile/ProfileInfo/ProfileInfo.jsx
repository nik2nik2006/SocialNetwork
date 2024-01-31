import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/img/user_img.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos.large || userPhoto}
                         alt='типа рисунок' className={s.image}/>
                </div>
                <div>
                    {profile.fullName}
                    {profile.lookingForAJobDescription}
                    {profile.contacts.facebook}
                </div>
                <div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;












