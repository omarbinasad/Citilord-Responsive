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
  updateProfile,
} from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(true);
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
  const storage = getStorage();
  const googleProvider = new GoogleAuthProvider();

  // image storage function
  async function uploadImage(file, user) {
    const fileRef = ref(storage, `${user.uid}/profile.jpg`);
    const snapshot = await uploadBytes(fileRef, file);
    const downloadURL = await getDownloadURL(fileRef, snapshot);
    updateProfile(user, { photoURL: downloadURL });
    alert("Profile Updated");
  }

  // Registration handler Function
  const handleRegister = (event) => {
    // event.preventDefault();
    // console.log(name, email, pass);
    if (pass.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    }
    return createUserWithEmailAndPassword(auth, email, pass);
    // .then((result) => {
    //   const user = result.user;
    //   setError("");
    //   verifyEmail();
    //   setUserName();
    //   console.log(user);
    // })
    // .catch((error) => {
    //   setError(error.message);
    // });
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  // Email verification function
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      // console.log(result);
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
    // event.preventDefault();
    return signInWithEmailAndPassword(auth, email, pass);

    // .then((result) => {
    //   const user = result.user;
    //   console.log(user);
    //   setError("");
    // })
    // .catch((error) => {
    //   setError(error.message);
    // });
  };
  // Name onchange handler
  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };
  // Email onchange handler
  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };
  // Password onchange handler
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    // console.log(event.target.value);
    setPass(event.target.value);
  };
  // password show hide handler
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  // google sign in function
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider).catch((error) => {
      setError(error.message);
    });
  };
  // const signInUsingGoogle = () => {
  //   signInWithPopup(auth, googleProvider)
  //     .then((result) => {
  //       console.log(result.user);
  //       setUser(result.user);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };
  // logout function
  const LogOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("inside state change", user);
        setUser(user);
      }
      setIsLoading(false);
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
    setError,
    setUserName,
    verifyEmail,
    uploadImage,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
