import React, {useState} from "react";

import {Link,useNavigate} from "react-router-dom";

import {useDispatch} from "react-redux";

import {loginUser} from "../redux/slices/authSlice";

function Login() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  function handleSubmit(e) {

    e.preventDefault();

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const foundUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!foundUser) {

      setError(
        "Invalid email or password"
      );

      return;
    }

    dispatch(
      loginUser({
        email,
        password
      })
    );

    navigate("/");
  }

  return (
    <section className="auth-container">

      <h1>
        Login
      </h1>

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
      >

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Login
        </button>

      </form>

      <p>
        Don't have an account?{" "}

        <Link to="/register">
          Register
        </Link>

      </p>

    </section>
  );
}

export default Login;