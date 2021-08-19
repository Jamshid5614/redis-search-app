import './App.css';
import {Route, Switch} from 'react-router-dom';

import HomePage from './containers/HomePage';
import ChatRoom from './containers/ChatRoom';
import CreateChat from './containers/CreateUser';
import Login from './containers/Login';
import SignUp from './containers/SignUp';

function App() {

  if(localStorage.getItem('user')) {
    return (
      <Switch>
        <Route path={["/","/home"]} exact component={HomePage} />         
        <Route path="/users/:id" exact component={ChatRoom} />         
        <Route path="/user/new" exact component={CreateChat} />         
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
      </Switch>  
    );
  }
  return <>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route component={Login} />
    </Switch>
  </>
}

export default App;
