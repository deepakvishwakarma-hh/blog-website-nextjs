import ls from 'localstorage-slim'
import { useRouter } from 'next/router'
export default function ConfigutreDemoLogin() {
    // setting router hook
    const router = useRouter(null)
    // function handle onClick for login
    const onClickHandlerForLogin = () => {
        ls.set('DemoLogin', { current: true })
        ls.remove('token')
        router.push('/')
    }
    // function handle onClick for logout
    const onClickHandlerForLogOut = () => {
        ls.remove('DemoLogin')
        router.reload()
    }

    return <>
        {
            (ls.get('DemoLogin')) ?
                <button onClick={onClickHandlerForLogOut}>Demo Logout</button>
                : <button onClick={onClickHandlerForLogin}>Demo Login </button>}</>;
}
