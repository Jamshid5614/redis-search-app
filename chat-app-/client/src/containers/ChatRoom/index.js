import {useState,useEffect} from 'react';
import axios from '../../utils/axios';
import {StyledUl} from './Styled';

export default function ChatRoom () {

    const [users,setUsers] = useState([]);
    const [chatMessages,setChatMessages] = useState([]);
    const [writingMessage,setWritingMessage] = useState('');

    const {_id: myId} = JSON.parse(localStorage.getItem('user'));
    const userId = window.location.pathname;
    console.log(userId);   

    const getMessages = async () => {
        try {
            const {data} = await axios(`/chat?senderId=${userId}`)
            setChatMessages(data);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchUsers = async () => {
        try {
            const {data} = axios.get('/users');
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }

    const sendMessage = async () => {
        try {
            const {data} = axios.patch('/chat?');
            getMessages();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUsers();
        getMessages();
    },[]);

    return <>
        <h2>Chat Room</h2>
        <h2>receiverId: {userId}</h2>
        <h2>my id: {myId}</h2>
        <StyledUl>
            {
                chatMessages.map(item => {
                    return <li className={item.receiverId === myId ? 'friend-message' : 'myself-message'}>
                        {item.message}
                    </li>;
                })
            }
        </StyledUl>
        <div className="d-flex">
            <input type="text" onChange={(e) => setWritingMessage(e.target.value)} placeholder="enter message"  />
            <button onClick={sendMessage}>send</button>
        </div>
    </>
}










