import Head from "next/head";
import db from "../../firebase.config"
import cls from "../../styles/blog.module.scss"
import { collection, getDocs } from "firebase/firestore"
import MiniBlog from "../../components/mini-blog/MiniBlog"

export default function blogComp({ data, author }) {
    const blog = data[0]
    const authorData = author
    return (
        <>
            <Head>
                <title>{blog.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="discription" discription={blog.discription} />
            </Head>
            <header className={cls.header}>
                <h5 className={cls.date}>{new Date(blog.id).toLocaleString()}</h5>
                <h1 className={cls.title}> {blog.title}</h1>
                <h3 className={cls.discription}>{blog.discription}</h3>
            </header>
            <main className={cls.main}>
                <p>{blog.content}</p>
            </main>
            <footer className={cls.footer}>
                <h3>author : {blog.author}</h3>
                <section className={cls.authorBlogs}>
                    {authorData.map((v, i) => {
                        return (
                            <MiniBlog key={v + i} obj={v} />
                        )
                    })}
                </section>
            </footer>
        </>
    );
}

export async function getServerSideProps(context) {
    const { query } = context
    const userCollectionRef = collection(db, 'user-blogs')
    const data = await getDocs(userCollectionRef);
    const purifiedData = data.docs.map(doc => doc.data())
    const result = purifiedData.filter(v => query.name == v.id)
    const author = purifiedData.filter(v => result[0].author == v.author)
    if (!data) {
        return {
            fallback: true,
        }
    }
    return (
        {
            props: {
                data: result,
                author: author
            }
        }
    )
}