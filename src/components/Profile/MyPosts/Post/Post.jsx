import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://www.1zoom.ru/big2/40/175542-Sepik.jpg'/>
            post 1 - {props.message}
            <div>
                <span>
                    like - {props.likeCount}
                </span>
            </div>
        </div>

    )
}

export default Post;