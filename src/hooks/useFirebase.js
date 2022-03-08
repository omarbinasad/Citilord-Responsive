import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Registration handler Function
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(name, email, pass);
    if (pass.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    }
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        verifyEmail();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // Email verification function
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };
  // Password Reset handler
  const handleResetPass = () => {
    sendPasswordResetEmail(auth, email).then((result) => {
      alert("Password reset email sent");
    });
  };
  // Signin/Login handler Function
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // Name onchange handler
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  // Email onchange handler
  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  // Password onchange handler
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(event.target.value);
    setPass(event.target.value);
  };
  // password show hide handler
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  // google sign in function
  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // logou function
  const LogOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("inside state change", user);
        setUser(user);
      }
    });
  }, []);

  return {
    values,
    user,
    error,
    handleRegister,
    handleLogin,
    handleResetPass,
    signInUsingGoogle,
    handleNameChange,
    handleClickShowPassword,
    handleEmailChange,
    handleChange,
    LogOut,
  };
};

export default useFirebase;