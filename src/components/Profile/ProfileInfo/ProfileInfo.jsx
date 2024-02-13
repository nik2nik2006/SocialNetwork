import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/img/user_img.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {findAllByDisplayValue} from "@testing-library/react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };
    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )
    };
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos.large || userPhoto}
                         alt='типа рисунок' className={s.image}/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                </div>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
                <div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                </div>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div className="button">
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full name: </b>{profile.fullName}
            </div>
            <div>
                <b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                <b>My professional skills: </b>{profile.lookingForAJobDescription}
            </div>
            <div>
                <b>About me: </b>{profile.aboutMe}
            </div>
            <div>
                <b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
};

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}: </b>{contactValue}
    </div>

}

export default ProfileInfo;












