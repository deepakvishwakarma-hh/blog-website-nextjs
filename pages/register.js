import {
    collection,
    getDocs,
    addDoc
} from 'firebase/firestore'
import db from '../firebase.config'
import { useState } from "react"
import { useRouter } from 'next/router'
import Loader from "../components/loaders/Loader"
import classes from '../styles/Register.module.scss'
import DemoButton from "../components/configure-demo/ConfigutreDemoLogin"
export default function Register({ database }) {
    const router = useRouter()
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [isLoading, setLoading] = useState(false);

    const userCollectionRef = collection(db, 'user');

    const onChangeinputHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const createUser = async () => {
        setLoading(!isLoading);

        const postOject = {
            name: user.name,
            email: user.email,
            password: user.password,
        }

        await addDoc(userCollectionRef, postOject)
            .then(() => {
                router.push('/login')
            });
    }
    const validateUser = () => {
        createUser()
    }

    return (
        <>
            {isLoading && <Loader />}
            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <h1>Create <br /> Account</h1>
                    <p>Already have an account? </p> <a onClick={() => { router.push('/login') }}>log in</a>
                    <section >
                        <input type="name" placeholder="Enter your name" required name="name" onChange={onChangeinputHandler} />
                        <input type="email" placeholder="Enter your Email" required name="email" onChange={onChangeinputHandler} />
                        <input type="password" placeholder="Enter your password" required name="password" onChange={onChangeinputHandler} />
                        <button type="submit" onClick={validateUser}>Create Account</button>
                    </section>
                    <DemoButton />
                </div>
            </div>
        </>
    )
}


export async function getServerSideProps(context) {
    const { res } = context;
    res.setHeader('Cache-Control', `s-maxage=60, stale-while-revalidate`)
    const userCollectionRef = collection(db, 'user')
    const data = await getDocs(userCollectionRef);
    const purifiedData = data.docs.map(doc => doc.data())
    return (
        {
            props: {
                database: purifiedData
            }
        }
    )
}