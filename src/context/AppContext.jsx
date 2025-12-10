import { createContext, useEffect, useState } from "react"

export const UserListContext = createContext(null);
UserListContext.displayName = "User List Context";

const AppContext = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchAllUsers = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
        };
        fetchAllUsers();
    }, []);

    useEffect(() => {
        const fetchAllPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setPosts(data);
        };
        fetchAllPosts();
    }, []);

    return (
        <UserListContext.Provider value={{users, posts}}>
            {children}
        </UserListContext.Provider>
    )
}

export default AppContext