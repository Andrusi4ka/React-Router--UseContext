import { useContext } from "react";
import { UserListContext } from "../context/AppContext";

const Childrens = () => {

    const { users, posts } = useContext(UserListContext);

    return (
        <div className="border border-dark p-3">
            <p className="mb-0 text-end fst-italic">Component 2</p>
            <h4 className="text-center pb-3">Childrens</h4>
            <ul className="list-unstyled">
                {users.map(user => <li className="py-1" key={user.id}>{user.name}, {user.username}</li>)}
            </ul>
        </div>
    )
}

export default Childrens