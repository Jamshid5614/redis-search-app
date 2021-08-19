import {useState,useEffect} from 'react';
import axios from '../../utils/axios';
import {Link} from 'react-router-dom';

export default function HomePage () {

    const [users,setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const {data} = await axios('/users');
            const arr = [];
            data.map(item => {
                if(JSON.parse(localStorage.getItem('user')).email !== item.email && JSON.parse(localStorage.getItem('user')).password !== item.password) {
                    arr.push(item);
                    console.log(item)
                    setUsers(arr);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUsers();
    },[])

    return <>
    {
        users.length === 0 ? <Link to="/user/new">new users for chatting</Link> :  <ul>
                {
                    users.map((item) => {
                        return <Link to={`/user/${item._id}`}>
                            <li key={item.id}>
                                {/* <img src={item.img} style={{
                                    width: '35px',
                                    height: '35px'
                                }} alt={item.name} /> */}
                                <h4>{item.name}</h4>
                            </li>
                        </Link>
                    })
                }
            </ul>

    }
    </>
}






