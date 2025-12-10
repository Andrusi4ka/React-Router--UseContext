import { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Contact = () => {

    const [contacts, setContacts] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await res.json();
            setContacts(data);
        };
        fetchContacts();
    }, []);

    return (
        <div>
            <h1 className='text-center'>Contact</h1>
            <div className='d-flex gap-4'>
                <div><img src="https://picsum.photos/id/155/400/600" alt="lorem-picsum" /></div>
                <div>
                    <ul className="list-unstyled">
                        {contacts && <li className='py-1'><strong>ID: </strong>{contacts.id}</li>}
                        {contacts && <li className='py-1'><strong>Name: </strong>{contacts.name}</li>}
                        {contacts && <li className='py-1'><strong>Username: </strong>{contacts.username}</li>}
                        {contacts && <li className='py-1'><strong>Email: </strong>{contacts.email}</li>}
                        {contacts && <li className='py-1'><strong>Address: </strong>
                            <ul className="list-unstyled ps-4">
                                {contacts && <li className='py-1'><strong>Street: </strong>{contacts.address.street}</li>}
                                {contacts && <li className='py-1'><strong>Suite: </strong>{contacts.address.suite}</li>}
                                {contacts && <li className='py-1'><strong>City: </strong>{contacts.address.city}</li>}
                                {contacts && <li className='py-1'><strong>Zipcode: </strong>{contacts.address.zipcode}</li>}
                            </ul>
                        </li>}
                        {contacts && <li className='py-1'><strong>Phone: </strong>{contacts.phone}</li>}
                        {contacts && <li className='py-1'><strong>Website: </strong>{contacts.website}</li>}
                        {contacts && <li className='py-1'><strong>Company: </strong>
                            <ul className="list-unstyled ps-4">
                                {contacts && <li className='py-1'><strong>Name: </strong>{contacts.company.name}</li>}
                                {contacts && <li className='py-1'><strong>CatchPhrase: </strong>{contacts.company.catchPhrase}</li>}
                                {contacts && <li className='py-1'><strong>Bs: </strong>{contacts.company.bs}</li>}
                            </ul>
                        </li>}
                    </ul>
                    <p>Lorem ipsum dolor sit, amet <Link to={'../gallery'}>consectetur adipisicing</Link> elit. Provident ad nisi aliquam perferendis corporis sequi, neque, beatae molestiae excepturi est rerum sapiente ex, perspiciatis reprehenderit modi a! Nihil, consectetur minus!</p>
                </div>
            </div>
        </div>
    )
}

export default Contact