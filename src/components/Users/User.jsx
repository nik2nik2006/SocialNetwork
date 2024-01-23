import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/img/user_img.jpg";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow, ...props}) => {
    return (
        <div className={styles.usersItem}>
            <span>
                <div className={styles.productsItemImage}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.large != null ? user.photos.large : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button className={styles.button}
                                  disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {unfollow(user.id)}}
                        >Unfollow</button>
                        : <button className={styles.button}
                                  disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {follow(user.id)}}
                        >Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div className={styles.productsItemTitle}>{user.name}</div>
                    <div className={styles.productsItemTitle}>{user.status}</div>
                </span>
                <span>
                    <div className={styles.productsItemText}>{"user.location.country"}</div>
                    <div className={styles.productsItemText}>{"user.location.city"}</div>
                </span>
            </span>
        </div>)
}

export default User;












