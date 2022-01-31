
import classes from "./Loader.module.scss"
export default function loader() {
    return (
        <div className={classes.loader}>
            <div className={classes.circle}>
            </div>
        </div>
    )
}

export const ComponentLoader = ({ state }) => {
    const JSX = <div className={classes.loader2}>
        <div className={classes.circle2}>
        </div>
    </div>
    return (state) ? JSX : null
}