import React, { useState } from 'react'
import "../App.css"
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import "./common.css";
import moment from 'moment';

const SendBox = () => {

    const [message, setMessage] = useState("");
    let time =  moment().format('HH:mm:ss');
    const handleSubmitMessage = async ()=> {
        if( message === ""){
            alert("Please send something!");
            return;
        }
        try {
            await addDoc(collection(db, "Messages"), {
                text : message,
                time: time
            })
        } catch(err) {

        }
        setMessage("")
    }

    return (
        <div className='p-6 full-width fixed bottom-0 bg-amber-50'>
            <form className='flex flex-row'>
                <input value={message} onChange={(e) => {
                    setMessage(e.target.value)
                }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Message" type="text" placeholder="Message"></input>
                <button onClick={()=>  handleSubmitMessage()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Send
                </button>
            </form>
        </div>
    )
}

export default SendBox