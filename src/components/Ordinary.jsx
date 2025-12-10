import { useContext } from "react";
import { UserListContext } from "../context/AppContext";

const Ordinary = () => {

    const { users, posts } = useContext(UserListContext);

    return (
        <div className="border border-dark p-3 flex-grow-1">
            <p className="mb-0 text-end fst-italic">Component 4</p>
            <h4 className="text-center">Ordinary</h4>
            <ul className="list-unstyled">
                {users.map(user => <li className="py-1" key={user.id}>{user.name}, {user.email}</li>)}
            </ul>
        </div>
    )
}

export default Ordinary