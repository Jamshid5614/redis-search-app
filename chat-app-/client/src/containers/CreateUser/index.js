import {useState} from 'react';
import axios from '../../utils/axios';
import {useHistory} from 'react-router-dom';

export default function CreateUser () {

    const history = useHistory();

    const [user,setUser] = useState({
        email: '',
        password: '',
        name: '',
        chats: {}
    });

    const inputHandle = e => {
        const {name,value} = e.target;
        setUser({...user,[name]: value})
    }

    const createUserHandle = async () => {
        try {
            const {data} = axios.post('/sign-up');
            console.log(data)
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return  <>
        <div>
            <input type="text" name="name" placeholder="name" onChange={inputHandle} />
            <button type="submit" onClick={createUserHandle}>Create</button>
        </div>
    </>
}







