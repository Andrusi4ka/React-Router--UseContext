import { useContext } from "react";
import { UserListContext } from "../context/AppContext";

const About = () => {

    const { users, posts } = useContext(UserListContext);

    return (
        <div>
            <h1 className="text-center">About</h1>
            <ul className="list-unstyled">
                {posts.map(post => <li className="py-1" key={post.id}><strong>{post.id}. {post.title}</strong><br></br>{post.body}</li>)}
            </ul>
        </div>
    )
}

export default About