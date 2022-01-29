import cls from './style.module.scss'
import { useRouter } from 'next/router';
export default function MiniBlog({ obj }) {
    // setting router hook
    const router = useRouter()

    // slicing discription into 40 letters
    const splicedString = obj.discription.slice(0, 40,)

    // Click handler push to the blog page
    const onClickHandler = () => { router.push(`/blog/${obj.id}`) }

    return <div
        className={cls.wrapper}
        onClick={onClickHandler}>
        <div>
            <small>@{obj.author}</small>
            <h1>{obj.title}</h1>
            <p>{splicedString}...</p>
        </div>
    </div>;
}
