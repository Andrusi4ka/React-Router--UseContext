import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="text-center">
        <h1 className="pb-5">404</h1>
        <h3>Page not found</h3>
        <h5><Link to="/">Go to main</Link></h5>
    </div>
  )
}

export default NotFound