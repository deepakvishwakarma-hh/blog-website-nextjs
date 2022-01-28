import classes from "./Loader.module.scss"
import { motion } from "framer-motion"
export default function loader() {
    return (
        <div className={classes.loader}>
            <motion.div className={classes.circle}
                animate={{
                    rotate: [0, 360],
                    transition: {
                        // duration: .5,
                        repeat: Infinity,
                        linear: true
                    }
                }}>

            </motion.div>
        </div>
    )
}