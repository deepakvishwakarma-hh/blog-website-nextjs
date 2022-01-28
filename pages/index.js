import dynamic from 'next/dynamic'
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase.config";
import Validate from '../hooks/Validate';
// import Aleart from '../components/primary-login-alert/Aleart';
const Header = dynamic(() => import('../components/header/Header'))
const Main = dynamic(() => import('../components/main/Main'))
export default function Home({ data }) {
  const validateUser = Validate()

  return (
    <>
      {/* <Aleart /> */}
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
