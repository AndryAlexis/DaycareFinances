import { Link } from "react-router-dom"

const Home = () => {
    return <>
        <ul>
            <li className="text-3xl bg-[red]">
                <Link to={'/test'}>To test</Link>
            </li>
        </ul>
    </>
}

export default Home