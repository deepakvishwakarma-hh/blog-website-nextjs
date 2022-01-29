import { useRouter } from 'next/router'
import Link from 'next/link'
import classes from "./Header.module.scss"
import Aleart from "../primary-login-alert/Aleart"
import { onLog } from 'firebase/app'
export default function Header() {
    // setting router hook
    const router = useRouter()
    // JSON for buttons
    const buttonsOverview = [
        {
            text: 'collection',
            path: '/',
        },
        {
            text: 'my account',
            path: '/account',
        },
        {
            text: 'create blog',
            path: '/create',
        }
    ]
    // Button Mapper for mapping ButtonsOverview
    const ButtonMapper = buttonsOverview.map((value, index) => {
        // color decision like : active class
        const color = (router.pathname == value.path) ? 'lightgrey' : null;
        // for styling
        const styleObject = { color: color }
        // map and return to wrapper
        return (
            <Link key={index} href={value.path}>
                <button style={styleObject} >{value.text} </button>
            </Link>
        )
    })

    return (
        <>
            <Aleart />
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <div className={classes.logo}>
                        ✒️Blogo
                    </div>
                    <div className={classes.buttonWrapper}>
                        {ButtonMapper}
                    </div>
                </nav>
            </header >
        </>

    )
}
