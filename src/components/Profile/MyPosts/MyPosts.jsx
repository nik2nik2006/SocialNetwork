import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validadors";
import {Textarea} from "../../Common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your text"} name={"newPostText"} component={Textarea}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'ProfileAddPostForm',
    // fields: ['firstName', 'lastName', 'email'] // all the fields in your form
})(AddPostForm);

window.props = [];

function MyPosts(props) {
    console.log("RENDER YO");

    let postsElements = props.posts.map(
        p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>);

    const addNewPost = (formData) => {
        props.addPost(formData.newPostText)
    }

    return (
        <div >
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;