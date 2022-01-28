import ls from 'localstorage-slim'
import { useRouter } from 'next/router'
import {
    useEffect,
    useState
} from 'react';
export default function Validate() {
    const [user, setUser] = useState(true)
    const router = useRouter()
    useEffect(() => {
        const token = ls.get('token')
        const demoLogin = ls.get('DemoLogin')
        if (!token && !demoLogin) {
            setUser(false)
            if (router.pathname == '/') {
                console.log('user is not logged in')
            }
            else {
                router.push('/login')
            }
        } else {
            if (token) {
                console.log('primary login found')
            }
            if (demoLogin) {
                console.log('demo login found')

            }
        }
    })
    return { user: user }
}
