import cls from './style.module.scss'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ComponentLoader } from "../loaders/Loader";
export default function MiniBlog({ obj }) {
    // setting router hook
    const router = useRouter()
    // component state - loader
    const [loader, setLoader] = useState(false)

    // slicing discription into 40 letters
    const splicedString = obj.discription.slice(0, 40,)

    // Click handler push to the blog page
    const onClickHandler = () => {
        setLoader(true)
        router.push(`/blog/${obj.id}`)
    }

    return <div
        style={{ background: (loader) ? "rgba(0, 0, 0, 0.1000)" : 'white' }}
        className={cls.wrapper}
        onClick={onClickHandler}>
        {loader && <ComponentLoader />}
        <div>
            <small>@{obj.author}</small>
            <h1>{obj.title}</h1>
            <p>{splicedString}...</p>
        </div>
    </div>;
}
