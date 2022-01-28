import React from 'react';
import cls from './macro.module.scss'
import { useRouter } from 'next/router';
import { useState } from 'react';
export default function Micro() {
    return <div> null </div>;
}

export const LoginBox = () => {
    const router = useRouter()
    const onClickHandler = () => { router.push('/login') }
    return (
        <>
            <div className={cls.LoginBox}>
                <h1><b>Login</b> to enjoy more services</h1>
                <button onClick={onClickHandler}>
                    Login
                </button>
            </div>
        </>
    )
}

export const DemoAlert = () => {
    const [show, setShow] = useState(true)
    const onClickHandler = () => {
        setShow(!show)
    }
    return (
        <>
            {show &&
                <div className={cls.DemoAlert}>
                    <div>
                        <h1>You Logged as <b>Demo</b> Logger</h1>
                        <small><b>Demo</b> is Specially designed for visitor and recruters who dosent want login.You cannot post blog in demo blog</small>
                    </div>
                    <button onClick={onClickHandler}>
                        Close
                    </button>
                </div>
            }
        </>
    )
}