import ls from 'localstorage-slim'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export default function ConfigutreDemoLogin() {

    const router = useRouter(null)
    const onClickHandlerForLogin = () => {
        ls.set('DemoLogin', { current: true })
        ls.remove('token')
        router.push('/')
    }
    const onClickHandlerForLogOut = () => {
        ls.remove('DemoLogin')
        router.reload()

    }

    return <>
        {
            (ls.get('DemoLogin')) ?
                <button onClick={onClickHandlerForLogOut}>Demo Logout</button> : <button onClick={onClickHandlerForLogin}>Demo Login </button>}</>;
}
