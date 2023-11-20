import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'http://www.jiju.ru/wp-content/uploads/pevec_nikolaj_baskov-300x225.jpg',
                    followed: false,
                    fullName: 'Nikolay',
                    status: 'I am a boss',
                    location: {city: 'Belgorod', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: 'http://www.jiju.ru/wp-content/uploads/pevec_nikolaj_baskov-300x225.jpg',
                    followed: true,
                    fullName: 'Volodia',
                    status: 'I am a student',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'http://www.jiju.ru/wp-content/uploads/pevec_nikolaj_baskov-300x225.jpg',
                    followed: false,
                    fullName: 'Valera',
                    status: 'I am a pick',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
            ]
        )
    }
    return <div>
        {props.users.map(u =>
            <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;