import { useState } from 'react'
import Search from './search/Search'
import classes from "./Main.module.scss"
import MiniBlog from '../mini-blog/MiniBlog'

export default function Main({ data }) {
    // component state
    const [search, updateSearch] = useState(false);

    // mapping Whole blogs in database
    const blogMapper = data?.map((v, i) => {
        return <MiniBlog key={v + i} obj={v} />
    })

    // mapping Searched blogs in database if finded
    const findInBlogs = data?.map((v, i) => {
        const condition = search && v.title.includes(search.toLowerCase())
        if (condition) { return <MiniBlog key={v + i} obj={v} /> }
    })

    // Handler for Search
    const onChangeHandlerForSearch = (e) => {
        updateSearch(e.target.value)
    }

    return (
        <main className={classes.main}>
            <aside className={classes.aside}>
                <Search onChange={onChangeHandlerForSearch} />
                <div className={classes.welcome}>
                    <h1>create blog🚀
                        <p>A Little space to be creative</p>
                    </h1>
                    <div className={classes.wrapper}>
                        Create
                    </div>
                </div>
            </aside>
            <div className={classes.content}>
                {search ? findInBlogs : blogMapper}
            </div>
        </main>
    )
}


