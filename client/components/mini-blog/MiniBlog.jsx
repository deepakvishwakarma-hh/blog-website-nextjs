import cls from './style.module.scss'
import { useRouter } from 'next/router';
export default function MiniBlog({ obj }) {
    const router = useRouter()
    const splicedString = obj.discription.slice(0, 40,)
    const onClickHandler = () => { router.push(`/blog/${obj.id}`) }
    const varients = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: .8,
        }
    }
    return <div
        className={cls.wrapper}
        onClick={onClickHandler}>
        <div>
            <h1>{obj.title}</h1>
            <p>{splicedString}...</p>
        </div>
    </div>;
}
