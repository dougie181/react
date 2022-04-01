import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";

function App() {
  const ctx = useContext(AuthContext);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // localStorage.getItem("isLoggedIn");

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };

  // useEffect(() => {
  //   const storedUserLoginState = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoginState === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  return (
    <React.Fragment>
      <MainHeader  />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
