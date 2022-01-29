import classes from "../Main.module.scss"
export default function Search({ onChange }) {
    return (
        <div className={classes.search}>
            <div>
                <input type="text" onChange={onChange} placeholder="Search Blogs" />
            </div>
        </div>
    );
}
