import { Link } from "react-router-dom"

const Home = () => {
    return <>
        <ul>
            <li>
                <Link to={'/test'}>To test</Link>
            </li>
        </ul>
    </>
}

export default Home