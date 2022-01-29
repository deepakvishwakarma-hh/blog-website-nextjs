import ls from 'localstorage-slim'
import { LoginBox, DemoAlert } from "../micros/Micro"
export default function Aleart() {
    const token = ls.get('token')
    const demo = ls.get('DemoLogin')
    return <>
        {(token) ? null : <LoginBox />}
        {(!demo) ? null : <DemoAlert />}
    </>;
}
