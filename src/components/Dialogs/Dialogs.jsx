import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/state";


const Dialogs = (props) => {

    let dialogsElements =props.dialogPage.dialogs
        .map( d => <DialogItem name={d.name} id={d.id}/>
        );

    let messagesElements = props.dialogPage.messages
        .map( m => <Message message={m.message} id={m.id}/>);

    let newMessageElement = React.createRef();


    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

  return(
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              { dialogsElements }
          </div>
          <div className={s.messages}>
              { messagesElements }
              <div>
                  <textarea onChange={onMessageChange}
                            ref={ newMessageElement }
                            value={props.newMessageText}></textarea>
              </div>
              <div>
                  <button onClick={ addMessage }>
                      Add post
                  </button>
              </div>
          </div>
      </div>
  )
}

export default Dialogs;
