import Image from "next/image"
import { useState } from 'react'
import Search from './search/Search'
import classes from "./Main.module.scss"
import MiniBlog from '../mini-blog/MiniBlog'

export default function Main({ data }) {
    const [search, updateSearch] = useState(false);

    const blogMapper = data?.map((v, i) => {
        return <MiniBlog key={v + i} obj={v} />
    })

    const findInBlogs = data?.map((v, i) => {
        const condition = search && v.title.includes(search.toLowerCase())
        if (condition) { return <MiniBlog key={v + i} obj={v} /> }
    })

    const onChangeHandlerForSearch = (e) => {
        updateSearch(e.target.value)
    }

    return (
        <main className={classes.main}>
            <button tooltip="create mini blog" className={classes.floatingButton}>
                <Image src="/pencil.svg" width="30" height="30" alt='none' />
            </button>
            <aside className={classes.aside}>
                <Search onChange={onChangeHandlerForSearch} />
            </aside>
            <div className={classes.content}>
                {search ? findInBlogs : blogMapper}
            </div>
        </main>
    )
}



