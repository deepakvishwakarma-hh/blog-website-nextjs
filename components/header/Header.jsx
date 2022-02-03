import Link from 'next/link'
import { useRouter } from 'next/router'
import classes from "./Header.module.scss"
import Aleart from "../primary-login-alert/Aleart"
import Image from "next/image"
import Xs from './Xs'
export default function Header() {
    // setting router hook
    const router = useRouter()
    // JSON for buttons
    const buttonsOverview = [
        {
            text: 'collection',
            path: '/',
            svg: "/grid.svg"
        },
        {
            text: 'my account',
            path: '/account',
            svg: "/person-circle.svg"
        },
        {
            text: 'create blog',
            path: '/create',
            svg: "/pencil-square.svg"
        }
    ]
    // Button Mapper for mapping ButtonsOverview
    const ButtonMapper = buttonsOverview.map((value, index) => {
        // color decision like : active class
        const color = (router.pathname == value.path) ? 'lightblue' : null;
        // for styling
        const styleObject = { background: color }
        // map and return to wrapper
        return (
            <Link key={index} href={value.path} passHref>
                <button style={styleObject} >
                    <Image src={value.svg} width="20" height="20" alt='icons' />
                </button>
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
            <Xs map={ButtonMapper} />
        </>

    )
}
