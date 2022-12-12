import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { signUp } from "../actions/authActions";

const SignUp = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // console.log(state);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  let headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (state.auth.message && isSubmit) navigate("/");
  }, [state.auth.message]);
  const collectData = async (e) => {
    e.preventDefault();

    dispatch(signUp(username, password, confirmPassword));

    console.warn(username, password, confirmPassword);
    console.warn(state);
    setIsSubmit(true);
    const payload = {
      username: username,
      password: password,
    };
    // Axios.post("/users/signup", payload, headers)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.error(err.response);
    //   });

    // let result = await fetch("http://localhost:5000/users/signup", {
    //   method: "post",
    //   body: JSON.stringify({ username, password }),
    //   headers: { "Content-Type": "application/json" },
    // });
    // result = await result.json();
    // console.warn(result);
    // if (result.error) {
    //   alert(JSON.stringify(result.error));
    // }
    // if(!state.auth.error)
    // navigate("/");
    // localStorage.setItem("user", JSON.stringify(result));
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <form
        onSubmit={(e) => {
          collectData(e);
        }}
      >
        <input
          className="inputBox"
          type="text"
          placeholder="enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        {/* <p>{state.auth.message}</p> */}
        <input
          className="inputBox"
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="inputBox"
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <p>{state.auth.errorSignup}</p>
        {/* <input
        className="inputBox"
        type="password"
        placeholder="confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      /> */}
        <button className="appButton" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default SignUp;

// import { useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";

// const SignUp = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   // const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();
//   useEffect(() => {
//     const auth = localStorage.getItem("user");
//     if (auth) {
//       navigate("/");
//     }
//   }, []);
//   const collectData = async (e) => {
//     e.preventDefault();
//     console.log(
//       username,
//       password
//       //  confirmPassword
//     );
//     let result = await fetch("http://localhost:5000/users/signup", {
//       method: "post",
//       body: JSON.stringify({ username, password }),
//       headers: { "Content-Type": "application/json" },
//     });
//     result = await result.json();
//     console.warn(result);
//     if (result.error) {
//       alert(JSON.stringify(result.error));
//     }
//     navigate("/");
//     // localStorage.setItem("user", JSON.stringify(result));
//   };
//   return (
//     <div className="register">
//       <h1>Register</h1>
//       <form
//         onSubmit={(e) => {
//           collectData(e);
//         }}
//       >
//         <input
//           className="inputBox"
//           type="text"
//           placeholder="enter username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           className="inputBox"
//           type="password"
//           placeholder="enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {/* <input
//         className="inputBox"
//         type="password"
//         placeholder="confirm password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//       /> */}
//         <button className="appButton" type="submit">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };
// export default SignUp;
