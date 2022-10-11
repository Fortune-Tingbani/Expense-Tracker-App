import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = AuthContext.Provider;
function AuthContextProvider({ children }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  //login function
  const authLogin = async (email, password) => {
    console.log(email, password);
    setLoading(true);
    await fetch("https://clumsy-belt-hen.cyclic.app/api/users/login", {
      method: "POST",
    headers:{
      'Content-Type':"application/json"  },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("New user :", user);
        setSuccess(true);
        setUser(data);
      })
      .catch((err) => {
        console.log("auth error : ", err);
        setError(err);
      });
    setLoading(false);
  };

  //signup function
  const authRegister = async (username, email, password) => {
    setLoading(true);
    // console.log(username, email, password);
    await fetch("https://clumsy-belt-hen.cyclic.app/api/users/register", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        username:username,
        email:email,
        password:password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setUser(data);
      })
      .catch((err) => {
        setError(err);
      });
    setLoading(false);
  };
  //logout function
  const AuthLogout = () => {
    setSuccess(false);
    setUser(null);
  };

  return (
    <AuthProvider
      value={{
        success,
        error,
        loading,
        user,
        authLogin,
        authRegister,
        AuthLogout,
      }}
    >
      {children}
    </AuthProvider>
  );
}

export { AuthContext, AuthContextProvider };


