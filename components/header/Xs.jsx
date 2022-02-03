import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import classes from './Header.module.scss'
const Xs = ({ map }) => {
    const [isShow, setShow] = useState(false);
    const handlerOnClick = () => { setShow(!isShow) }
    const styleVarients = {
        initial: {
            opacity: 0,
            height: 0,
            marginBottom: '0'

        },
        animate: {
            opacity: 1,
            height: 'fit-content',
            marginBottom: '1rem'

        },
        exit: {
            opacity: 0,
            height: 0,
            marginBottom: '0'

        }
    }
    return (
        <header className={classes.xs_header}>
            <nav className={classes.xs_nav}>
                <div className={classes.logo}>
                    ✒️Blogo
                </div>
                <button onClick={handlerOnClick}>
                    <Image src="/list.svg" alt="icons" width="40" height="40" />
                </button>
            </nav>
            <AnimatePresence>
                {isShow && <motion.div
                    variants={styleVarients}
                    animate="animate"
                    initial="initial"
                    exit="exit"
                    className={classes.mapper}>{map}</motion.div>}
            </AnimatePresence>
        </header >
    )
}

export default Xs