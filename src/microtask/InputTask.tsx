import React, {useState} from "react";
import {FullInput} from "./component/FullInput";
import {Input} from "./component/Input";
import {Button} from "./component/Button";

function InputTask() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState("")

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message]);
    }

    const callBackButtonHandler = () => {
        addMessage(title);
        setTitle("");
    }

    return (
        <div>
            <Input setTitle={setTitle} title={title}/>
            <Button name={"+"} callBack={callBackButtonHandler}/>
            {/*<FullInput addMessage={addMessage}/>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default InputTask;