import { useContext } from "react";
import { UserListContext } from "../context/AppContext";

const Vip = () => {

    const { users, posts } = useContext(UserListContext);

    return (
        <div className="border border-dark p-3 flex-grow-1">
            <p className="mb-0 text-end fst-italic">Component 5</p>
            <h4 className="text-center">VIP</h4>
            <ul className="list-unstyled">
                {users.map(user => <li className="py-1" key={user.id}>{user.name}, {user.website}</li>)}
            </ul>
        </div>
    )
}

export default Vip