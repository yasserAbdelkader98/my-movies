import { useState } from "react";

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [loginFormErrors, setLoginFormErrors] = useState({
    emailErrors: "",
    passwordErrors: "",
  });

  const pattern = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setLoginForm({
        ...loginForm,
        email: event.target.value,
      });

      setLoginFormErrors({
        ...loginFormErrors,
        emailErrors:
          event.target.value.length === 0
            ? "this field canot be empty"
            : !pattern.test(event.target.value)
            ? "please Enter a valid email"
            : null,
      });
    } else if (event.target.name === "password") {
      setLoginForm({
        ...loginForm,
        password: event.target.value,
      });
      setLoginFormErrors({
        ...loginFormErrors,
        passwordErrors:
          event.target.value.length === 0
            ? "this field canot be empty"
            : event.target.value.length < 3
            ? "min characters are 3"
            : null,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!loginFormErrors.emailErrors && !loginFormErrors.passwordErrors) {
      alert("successfully logged in");
    }
  };

  const showPassword = (e) => {
    e.preventDefault();
    const passwordInput = document.getElementById("password");
    const eye = document.getElementById("eye");

    if (passwordInput.getAttribute("type") === "password") {
      passwordInput.setAttribute("type", "text");
      eye.className = "fa fa-eye-slash";
    } else {
      passwordInput.setAttribute("type", "password");
      eye.className = "fa fa-eye";
    }
  };

  return (
    <>
      <form
        style={{ margin: "125px auto" }}
        className=" container form-control w-25"
      >
        <h2>Login</h2>
        <div className=" mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={loginForm.email}
            onChange={handleChange}
          />
          <div id="emailError" className="form-text text-danger">
            {loginFormErrors.emailErrors}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={loginForm.password}
            onChange={handleChange}
          />
          <i
            className="fa fa-eye"
            id="eye"
            aria-hidden="true"
            onClick={showPassword}
          />
          <div id="passwordError" className="form-text text-danger">
            {loginFormErrors.passwordErrors}
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary "
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
