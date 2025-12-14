import { Navigate, Outlet, NavLink, useNavigate } from "react-router";

const Admin = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  const logoutHandler = () => {
    setIsAuth(false);
    navigate("/");
  };

  return (
    <div>
      <header>
        <div className="p-5 border border-dark text-center fst-italic">Header</div>
      </header>

      <div className="py-3 d-flex gap-3">
        <aside className="border border-dark w-25 p-3">
          <p className="mb-3 text-end fst-italic">Statisk komponent</p>
          <ul className="nav flex-column gap-2">
            <li><NavLink to="sign-in" className="nav-link p-0">Sign in</NavLink></li>
            <li><NavLink to="sign-up" className="nav-link p-0">Sign up</NavLink></li>
            <li><NavLink to="forgot-password" className="nav-link p-0 pb-3">Forgot password</NavLink></li>
          </ul>
          <button className="btn btn-outline-danger" onClick={logoutHandler}>Logout</button>
        </aside>

        <main className="w-75 d-flex flex-column gap-3">
          <div className="border border-dark p-3 text-center h-100">
            <p className="mb-0 text-end fst-italic">Dynamisk komponent "Outlet"</p>
            <Outlet />
          </div>
        </main>
      </div>

      <footer>
        <div className="p-5 border border-dark text-center fst-italic">Footer</div>
      </footer>
    </div>
  );
};

export default Admin;
