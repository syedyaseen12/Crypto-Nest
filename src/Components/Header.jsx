import { Link } from "react-router"
const Header = () => {
  return (
    <div className="flex justify-end p-3 gap-5 pr-14">
        <Link className="text-white font-bold"to="/">Home </Link>
        <Link className="text-white font-bold" to="about" >About</Link>

    </div>
  )
}

export default Header