import { useState } from "react";
import axios from "../../utils/axios";
import { useHistory, Link } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginHandle = async () => {
    axios
      .post("/login", user)
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data.data));
        window.location.pathname = "/home";
      })
      .catch((err) => setErrorMsg(err.message));
  };

  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="email"
        name="email"
        onChange={inputHandle}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        onChange={inputHandle}
      />
      <button onClick={loginHandle}>Login</button>
      <Link to="/sign-up">Sign up</Link>
      <p style={{ color: "red" }}>{errorMsg}</p>
    </>
  );
}
