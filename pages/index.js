import dynamic from 'next/dynamic'
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase.config";
import Validate from '../hooks/Validate';
import ls from "localstorage-slim"
const Header = dynamic(() => import('../components/header/Header'))
const Main = dynamic(() => import('../components/main/Main'))
export default function Home({ data }) {
  // setting up validate hook
  const validateUser = Validate()
  console.log(process.env)


  return (
    <>
      <Header />
      <Main data={data} />
    </>
  )
}

export async function getServerSideProps(context) {
  const { res } = context;
  res.setHeader('Cache-Control', `s-maxage=60, stale-while-revalidate`)
  const userCollectionRef = collection(db, 'user-blogs')
  const data = await getDocs(userCollectionRef);
  const purifiedData = data.docs.map(doc => doc.data())
  return (
    {
      props: {
        data: purifiedData
      }
    }
  )
}
