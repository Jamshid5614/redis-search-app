import {useState} from 'react';
import axios from '../../utils/axios';
import {useHistory,Link} from 'react-router-dom';

export default function SignUp () {

    const history = useHistory();

    const [user,setUser] = useState({
        email: '',
        password: '',
        name: '',
    });
    const [errorMsg,setErrorMsg] = useState('');

    const inputHandle = e => {
        const {name,value} = e.target;
        setUser({...user,[name]: value});
    }

    const signUpHandle = async () => {
        axios
        .post("/sign-up", user)
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data.data));
          window.location.pathname = "/home";
        })
        .catch((err) => setErrorMsg(err.message));
    }

    return <>
        <h1>Sign up</h1>
        <input type="text" placeholder="name" name="name" onChange={inputHandle} />
        <input type="text" placeholder="email" name="email" onChange={inputHandle} />
        <input type="text" placeholder="password" name="password" onChange={inputHandle} />
        <button onClick={signUpHandle}>Sign up</button>
        <Link to="/login">Login</Link>
        <p style={{color: 'red'}}>{errorMsg}</p>
    </>
}



