import Creator from "../components/blog-creator/Creator";
import Validate from '../hooks/Validate';
import Header from "../components/header/Header";
export default function create() {
    const validate = Validate()
    return <>
        <Header />
        <Creator />
    </>;
}
