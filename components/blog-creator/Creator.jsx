import { useState } from 'react';
import ls from 'localstorage-slim';
import cls from './Creator.module.scss';
import db from "../../firebase.config";
import { collection, addDoc, } from "firebase/firestore";

export default function Creator() {
    // defining collection 
    const userCollectionRef = collection(db, 'user-blogs')
    // component personal state
    const [inputData, updateInputData] = useState({ title: undefined, discription: undefined, content: undefined, })
    // function : validate user inputs and store to database with some user credentials from local storage
    const validateInputs = async () => {
        const { title, discription, content } = inputData
        if (title && discription && content) {
            const output = ls.get('token', { decrypt: true });
            const storeObject = {
                ...inputData,
                author: output.name,
                id: Date.now()
            }
            await addDoc(userCollectionRef, storeObject)
        }
    }
    // update state on change
    const OnChangeHandler = (e) => {
        const { name, value } = e.target;
        updateInputData(previousData => {
            return {
                ...previousData,
                [name]: value?.toLowerCase()
            }
        })
        console.log(inputData)
    }

    // specially design to prevent blog-creation condition not loged in
    const submitButtonFunctionality = <button style={{ opacity: (ls.get('token') !== null) ? 1 : 0 }} className={cls.submitButton} onClick={validateInputs}>submit</button>

    // warning - condition(user is not logged  in)
    const warningUserNotPrimaryLogin = <span className={cls.alert}>{(ls.get('token') !== null) ? null : "you specially need to login with  id password to create mini blog post"}</span>
    return (
        <div className={cls.wrapper}>

            <div className={cls.experimental}>
                <label className={cls.label}>
                    <h1>Title</h1>
                    <small>Title must be small and attractive and maximum 5 letter long.</small>
                    <input name="title" onChange={OnChangeHandler} placeholder="Your blog title" type="text" required />
                </label>
                <label className={cls.label}>
                    <h1>Discription</h1>
                    <small>Discription is a small summary of your entire blog.It must be 30+ letter long</small>
                    <input name="discription" onChange={OnChangeHandler} placeholder="Your blog Discription" type="text" required />
                </label>

                <label className={cls.label}>
                    <h1>Content</h1>
                    <small>Your blog content</small>
                    <textarea name="content" onChange={OnChangeHandler} required></textarea>
                </label>

            </div>
            <div className={cls.footer}>
                {submitButtonFunctionality}
                {warningUserNotPrimaryLogin}
            </div>
        </div>
    )
}

