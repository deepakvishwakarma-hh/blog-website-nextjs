import dynamic from 'next/dynamic'
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase.config";
import Validate from '../hooks/Validate';
import ls from 'localstorage-slim'
import { LoginBox, DemoAlert } from '../components/micros/Micro';
const Header = dynamic(() => import('../components/header/Header'))
const Main = dynamic(() => import('../components/main/Main'))
export default function Home({ data }) {
  const validateUser = Validate()
  const token = ls.get('token')
  const demo = ls.get('DemoLogin')
  return (
    <>
      {(token) ? null : <LoginBox />}
      {(!demo) ? null : <DemoAlert />}
      <Header />
      <Main data={data} />
    </>
  )
}

export async function getServerSideProps() {
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
