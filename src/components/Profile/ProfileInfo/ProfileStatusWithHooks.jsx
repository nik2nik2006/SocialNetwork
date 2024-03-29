import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        if (props.isOwner) {
            setEditMode(true);
        }
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <div>
            {!editMode &&
                <div>
                    Status: <span onDoubleClick={activateMode}>{props.status || "No status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    Status: <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;

















