import classes from "./Loader.module.scss"
export default function loader() {
    return (
        <div className={classes.loader}>
            <div className={classes.circle}>
            </div>
        </div>
    )
}