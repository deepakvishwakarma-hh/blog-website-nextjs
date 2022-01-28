import { collection, getDocs, } from 'firebase/firestore';
import db from '../firebase.config'
import ls from 'localstorage-slim';
import { useState } from "react"
import { useRouter } from 'next/router'
import Loader from "../components/loaders/Loader"
import classes from '../styles/Register.module.scss'
import DemoButton from "../components/configure-demo/ConfigutreDemoLogin"

export default function Login() {
    const router = useRouter();
    const userCollectionRef = collection(db, 'user');
    const [isLoading, setLoading] = useState(false);
    const [currUser, setUser] = useState({
        email: '',
        password: ''
    })
    const changeHandler = (e) => { setUser({ ...currUser, [e.target.name]: e.target.value }) }
    const validateUser = (database) => {
        const isUserPresent = database.filter(user => user.email === currUser.email && user.password === currUser.password);
        if (isUserPresent.length > 0) {
            ls.set('token', {
                name: isUserPresent[0].name,
                email: isUserPresent[0].email,
            }, { encrypt: true });

            ls.remove('DemoLogin')
            setTimeout(() => {
                router.push('/');
            }, 200)
        } else {
            alert('No login Founds')
            setTimeout(() => {
                router.push('/register');
            }, 1000)
        }
    }

    const createUser = async (e) => {
        e.preventDefault()
        setLoading(!isLoading);
        try {
            await getDocs(userCollectionRef).then(data => {
                const database = data.docs.map(doc => doc.data());
                validateUser(database);
            })
        } catch (err) {
            return <h1>{err}</h1>
        }
    }

    return (
        <>
            {isLoading && <Loader />}
            <div className={classes.wrapper} >
                <div className={classes.content}>
                    <h1>Login <br /> Account</h1>
                    <p>Need to create accout? </p>
                    <a onClick={() => { router.push('/register') }}>register</a>
                    <section >
                        <input type="email" placeholder="Enter your Email" required name="email" onChange={changeHandler} />
                        <input type="password" placeholder="Enter your password" required name="password" onChange={changeHandler} />
                        <button type="submit" onClick={createUser}>Login</button>
                    </section>
                    <DemoButton />
                </div>
            </div>
        </>
    )
}
