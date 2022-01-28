import ls from "localstorage-slim"
import db from '../firebase.config'
import Validate from "../hooks/Validate"
import Header from "../components/header/Header"
import cls from '../styles/account.module.scss'
import { collection, getDocs } from "firebase/firestore"
import MiniBlog from "../components/mini-blog/MiniBlog"

const userData = ls.get('token', { decrypt: true })
export default function account({ data }) {
    const validateUser = Validate()
    const userCreatedBlogs = data.filter(v => v.author == userData?.name).map((v, i) => { return <MiniBlog key={v + i} obj={v} /> })
    return <>
        <Header />
        <div>
            <div className={cls.user_wrap}>
                <h1>@{userData?.name ?? 'Demo Logger'}</h1>
                <h3>{userData?.email ?? 'fake@email'}</h3>
            </div>
            <h1 className={cls.basictext}>My Creations</h1>
            <div className={cls.blogs}>
                {/* {
                    data.filter(v => v.author == userData?.name).map((v, i) => {
                        return (
                            <MiniBlog key={v + i} obj={v} />
                        )
                    })
                } */}
                {userCreatedBlogs}
            </div>
        </div>
    </>;
}

export async function getServerSideProps() {
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