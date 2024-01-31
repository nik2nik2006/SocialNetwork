import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/img/user_img.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected =(e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos.large || userPhoto}
                         alt='типа рисунок' className={s.image}/>
                    { isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                </div>
                <div>
                    {profile.fullName}
                    {profile.lookingForAJobDescription}
                    {profile.contacts.facebook}
                </div>
                <div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;












