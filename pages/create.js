import Creator from "../components/blog-creator/Creator";
import Validate from '../hooks/Validate';
import Header from "../components/header/Header";
export default function create() {
    // setting up validate hook
    const validate = Validate()
    return <>
        <Header />
        <Creator />
    </>;
}
