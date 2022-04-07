import { useState } from "react";

function Register() {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const [registerFormErrors, setRegisterFormErrors] = useState({
    nameError: "",
    emailError: "",
    usernameError: "",
    passwordError: "",
    confirmpasswordError: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !registerFormErrors.nameError &&
      !registerFormErrors.usernameError &&
      !registerFormErrors.emailError &&
      !registerFormErrors.passwordError &&
      !registerFormErrors.confirmpasswordError
    ) {
      alert("Succesfully registered");
    }
  };

  const pattern = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
  const userNamePattern = /^\S*$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;

  const handleChange = (event) => {
    // eslint-disable-next-line default-case
    switch (event.target.name) {
      case "name":
        setRegisterForm({
          ...registerForm,
          name: event.target.value,
        });

        setRegisterFormErrors({
          ...registerFormErrors,
          nameError:
            event.target.value.length === 0
              ? "Name can't be empty field"
              : null,
        });

        break;
      case "email":
        setRegisterForm({
          ...registerForm,
          email: event.target.value,
        });

        setRegisterFormErrors({
          ...registerFormErrors,
          emailError:
            event.target.value.length === 0
              ? "Email can't be empty field"
              : !pattern.test(event.target.value)
              ? "type a valid email address"
              : null,
        });

        break;
      case "username":
        setRegisterForm({
          ...registerForm,
          username: event.target.value,
        });

        setRegisterFormErrors({
          ...registerFormErrors,
          usernameError:
            event.target.value.length === 0
              ? "User Name can't be empty field"
              : !userNamePattern.test(event.target.value)
              ? "UserName field shouldn't contain spaces "
              : null,
        });
        break;
      case "password":
        setRegisterForm({
          ...registerForm,
          password: event.target.value,
        });

        setRegisterFormErrors({
          ...registerFormErrors,
          passwordError:
            event.target.value.length === 0
              ? "password can't be empty field"
              : !passwordPattern.test(event.target.value)
              ? "password should have at least 1 upper case 1 lower case 1 digit 1 special character at least 4 characters"
              : null,
        });

        break;
      case "confirmpassword":
        setRegisterForm({
          ...registerForm,
          confirmpassword: event.target.value,
        });

        setRegisterFormErrors({
          ...registerFormErrors,
          confirmpasswordError:
            event.target.value !== registerForm.password
              ? "password doesn't match"
              : null,
        });
        break;
    }
  };

  const showPassword = (e) => {
    e.preventDefault();
    const passwordInput = e.target.previousElementSibling;
    const eye = e.target;

    if (passwordInput.getAttribute("type") === "password") {
      passwordInput.setAttribute("type", "text");
      eye.className = "fa fa-eye-slash";
    } else {
      passwordInput.setAttribute("type", "password");
      eye.className = "fa fa-eye";
    }
  };
  const showConfirmPassword = (e) => {
    e.preventDefault();
    const passwordInput = e.target.previousElementSibling;
    const eye = e.target;

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
      <form className="container form-control w-25">
        <h2>Register</h2>

        <div className=" mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            aria-describedby="nameHelp"
            value={registerForm.name}
            onChange={handleChange}
          />
          <div id="nameError" className="form-text text-danger">
            {registerFormErrors.nameError}
          </div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            value={registerForm.email}
            onChange={handleChange}
          />
          <div id="emailError" className="form-text text-danger">
            {registerFormErrors.emailError}
          </div>
        </div>

        <label htmlFor="username" className="form-label">
          User Name
        </label>
        <input
          type="text"
          className="form-control"
          name="username"
          aria-describedby="userNameHelp"
          value={registerForm.username}
          onChange={handleChange}
        />
        <div id="nameError" className="form-text text-danger">
          {registerFormErrors.usernameError}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="r-password"
            className="form-control"
            name="password"
            value={registerForm.password}
            onChange={handleChange}
          />
          <i
            className="fa fa-eye"
            id="r-eye"
            aria-hidden="true"
            onClick={showPassword}
          />

          <div id="passwordError" className="form-text text-danger">
            {registerFormErrors.passwordError}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="cr-password"
            className="form-control"
            name="confirmpassword"
            value={registerForm.confirmpassword}
            onChange={handleChange}
          />
          <i
            className="fa fa-eye"
            id="cr-eye"
            aria-hidden="true"
            onClick={showConfirmPassword}
          />
          <div id="passwordError" className="form-text text-danger">
            {registerFormErrors.confirmpasswordError}
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Register;
