import React, {useState} from "react";

import {Link, useNavigate} from "react-router-dom";

import {useDispatch} from "react-redux";

import {registerUser} from "../redux/slices/authSlice";

function Register() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  function handleSubmit(e) {

    e.preventDefault();

    if (!name || !email || !password) {

      setError(
        "Please fill all fields"
      );

      return;
    }

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const alreadyExists =
      users.find(
        (user) =>
          user.email === email
      );

    if (alreadyExists) {

      setError(
        "Email already registered"
      );

      return;
    }

    dispatch(
      registerUser({
        name,
        email,
        password
      })
    );

    alert(
      "Registration successful!"
    );

    navigate("/login");
  }

  return (
    <section className="auth-container">

      <h1>
        Create Account
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
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

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
          Register
        </button>

      </form>

      <p>
        Already have an account?{" "}

        <Link to="/login">
          Login
        </Link>

      </p>

    </section>
  );
}

export default Register;