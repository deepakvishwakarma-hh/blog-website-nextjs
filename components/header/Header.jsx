import classes from "./Header.module.scss"
import { useRouter } from 'next/router'
import Aleart from "../primary-login-alert/Aleart"
export default function Header() {
    const router = useRouter()
    return (
        <>
            <Aleart />
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <h1>Blogo <sub>mini blogs</sub></h1>
                    <button style={{ color: (router.pathname == '/') ? 'lightgrey' : null }} onClick={() => { router.push('/') }}>Home</button>

                    <button style={{ color: (router.pathname == '/account') ? 'lightgrey' : null }} onClick={() => { router.push('/account') }}>My account</button>

                    <button style={{ color: (router.pathname == '/create') ? 'lightgrey' : null }} onClick={() => { router.push('/create') }} >
                        Create Blog
                    </button>
                </nav>
            </header >
        </>

    )
}
