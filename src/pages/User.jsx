import { useState, useEffect  } from 'react';
import { useParams, Link } from 'react-router';

const User = () => {

    const [user, setUser] = useState({});
    const params = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            const data = await res.json();
            setUser(data);
        };
        fetchUser();
    }, [params.id]);

  return (
    <div>
        <h1 className="text-center">{user.name}</h1>
        <div className='d-flex gap-4'>
                <div><img src="https://picsum.photos/id/155/400/600" alt="lorem-picsum" /></div>
                <div>
                    <ul className="list-unstyled">
                        {user && <li className='py-1'><strong>ID: </strong>{user.id}</li>}
                        {user && <li className='py-1'><strong>Name: </strong>{user.name}</li>}
                        {user && <li className='py-1'><strong>Username: </strong>{user.username}</li>}
                        {user && <li className='py-1'><strong>Email: </strong>{user.email}</li>}
                        {user && <li className='py-1'><strong>Address: </strong>
                            <ul className="list-unstyled ps-4">
                                {user && <li className='py-1'><strong>Street: </strong>{user.address?.street}</li>}
                                {user && <li className='py-1'><strong>Suite: </strong>{user.address?.suite}</li>}
                                {user && <li className='py-1'><strong>City: </strong>{user.address?.city}</li>}
                                {user && <li className='py-1'><strong>Zipcode: </strong>{user.address?.zipcode}</li>}
                            </ul>
                        </li>}
                        {user && <li className='py-1'><strong>Phone: </strong>{user.phone}</li>}
                        {user && <li className='py-1'><strong>Website: </strong>{user.website}</li>}
                        {user && <li className='py-1'><strong>Company: </strong>
                            <ul className="list-unstyled ps-4">
                                {user && <li className='py-1'><strong>Name: </strong>{user.company?.name}</li>}
                                {user && <li className='py-1'><strong>CatchPhrase: </strong>{user.company?.catchPhrase}</li>}
                                {user && <li className='py-1'><strong>Bs: </strong>{user.company?.bs}</li>}
                            </ul>
                        </li>}
                    </ul>
                    <p>Lorem ipsum dolor sit, amet <Link to={'../gallery'}>consectetur adipisicing</Link> elit. Provident ad nisi aliquam perferendis corporis sequi, neque, beatae molestiae excepturi est rerum sapiente ex, perspiciatis reprehenderit modi a! Nihil, consectetur minus!</p>
                </div>
            </div>
    </div>
  )
}

export default User