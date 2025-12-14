import { Navigate, useNavigate } from "react-router"

const Admin = ({ isAuth, setIsAuth }) => {

    const navigate = useNavigate();

    if (!isAuth) {
        return <Navigate to="/" />
    }

    const logoutHandler = () => {
        setIsAuth(false);
        navigate('/');
    };

    return (
        <div className="text-center">
            <h1 className="pb-4">Admin</h1>
            <div className="mb-4"><img src="https://robohash.org/billy" alt="andrii" /></div>
            <button className="btn btn-outline-danger" onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Admin