import ls from "localstorage-slim"
import db from '../firebase.config'
import Header from "../components/header/Header"
import cls from '../styles/account.module.scss'
import { collection, getDocs } from "firebase/firestore"
import MiniBlog from "../components/mini-blog/MiniBlog"
const userData = ls.get('token', { decrypt: true })
export default function account({ data }) {
    // filter logged user created blog form database
    const userCreatedBlogs = data.filter(v => v.author == userData?.name).map((v, i) => { return <MiniBlog key={v + i} obj={v} /> })

    // function handler logout
    const logoutHandler = () => {
        // get user re-clicking
        const userOpenion = confirm("do you really want to logout")
        // log out if user want to
        if (userOpenion) {
            ls.remove('token')
            ls.remove('DemoToken')
        }
    }
    return <>
        <Header />
        <div>
            <div className={cls.user_wrap}>
                <h1>@{userData?.name ?? 'Demo Logger'} <br />
                    <h3> {userData?.email ?? 'fake@email'}</h3>
                </h1>
                <button onClick={logoutHandler} className={cls.logoutButton}>Logout</button>
            </div>
            <h1 className={cls.basictext}>My Creations</h1>
            <div className={cls.blogs}>
                {userCreatedBlogs}
            </div>
        </div>
    </>;
}

export async function getServerSideProps(context) {
    const { res } = context;
    res.setHeader('Cache-Control', `s-maxage=60, stale-while-revalidate`)
    const userCollectionRef = collection(db, 'user-blogs')
    const data = await getDocs(userCollectionRef);
    const purifiedData = data.docs.map(doc => doc.data())
    return (
        {
            props: {
                data: purifiedData
            }
        }
    )
}