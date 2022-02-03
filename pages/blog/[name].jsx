import Head from "next/head";
import Link from 'next/link'
import db from "../../firebase.config"
import cls from "../../styles/blog.module.scss"
import { collection, getDocs } from "firebase/firestore"
import MiniBlog from "../../components/mini-blog/MiniBlog"
import { motion } from 'framer-motion'
export default function blogComp({ blog, author }) {
    const forRender = author.filter(v => v.id !== blog.id)
    const authorBlogMapper = forRender.map((v, i) => {
        return <MiniBlog key={v + i} obj={v} />
    })
    const authorBlogs = (forRender[0] == undefined) ?
        null :
        <>
            <h3>Author Blogs</h3>
            <section className={cls.authorBlogs}>
                {authorBlogMapper}
            </section>
        </>

    return (
        <>
            <Head>
                <title>blogo - {blog.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="discription" discription={blog.discription} />

            </Head>
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
            >
                <header className={cls.header}>
                    <h5 className={cls.author}> @{blog.author}</h5>
                    <h1 className={cls.title}> {blog.title}</h1>
                    <h5 className={cls.date}>{new Date(blog.id).toLocaleString()}</h5>
                    <h3 className={cls.discription}>{blog.discription}</h3>
                </header>
                <main className={cls.main}>
                    <p>{blog.content}</p>
                </main>
                <footer className={cls.footer}>
                    {authorBlogs}
                    <Link href='/' passHref>
                        <div className={cls.reference}> Blogo <small>deployed on vercel</small> </div>
                    </Link>
                </footer>
            </motion.div>
        </>
    );
}

export async function getServerSideProps(context) {
    const { query, res } = context;
    res.setHeader('Cache-Control', `s-maxage=60, stale-while-revalidate`)
    const userCollectionRef = collection(db, 'user-blogs')
    const data = await getDocs(userCollectionRef);
    const purifiedData = data.docs.map(doc => doc.data())
    const result = purifiedData.filter(v => query.name == v.id)
    const author = purifiedData.filter(v => result[0].author == v.author)
    return (
        {
            props: {
                blog: result[0],
                author: author
            }
        }
    )
}