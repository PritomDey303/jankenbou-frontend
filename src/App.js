import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./Components/CommonComponents/Footer/Footer";
import Navigation from "./Components/CommonComponents/Navigation/Navigation";
import Home from "./Components/Pages/Home/Home";
import Lottery from "./Components/Pages/Lottery/Lottery";
import PostAdd from "./Components/Pages/PostAdd/PostAdd";
import SignIn from "./Components/Pages/SignIn/SignIn";
import SignUp from "./Components/Pages/SignUp/SignUp";
import ViewAdd from "./Components/Pages/ViewAdd/ViewAdd";
import BackDrop from "./Components/UtilityComponents/BackDrop/BackDrop";
import PrivateRoute from "./Components/UtilityComponents/PrivateRoute/PrivateRoute";
import Toastify from "./Components/UtilityComponents/Toast/Toastify";
import { UserAuthContextProvider } from "./context/UserAuthContext";
export const ToastProvider = createContext();

function App() {
  //toastify
  const [show, setShow] = React.useState(false);
  const [bg, setBg] = React.useState("bg-success");
  const [message, setMessage] = React.useState("");
  const handleToastify = (message, bg) => {
    setBg(bg);
    setMessage(message);
    setShow(true);
  };

  return (
    <div className="App">
      {/* <div style={{ zIndex: 999999999999 }}>
        <Zoom background="#02C2E4" color="white" />
      </div> */}
      <BrowserRouter>
        <UserAuthContextProvider>
          <Navigation />
          <ToastProvider.Provider value={{ handleToastify }}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route exact path="/signin" element={<SignIn />}></Route>
              <Route path="/addvertise/:id" element={<ViewAdd />}></Route>

              <Route path="/lottery" element={<Lottery />}></Route>

              <Route
                path="/post-add"
                element={
                  <PrivateRoute>
                    <PostAdd />
                  </PrivateRoute>
                }
              ></Route>
            </Routes>
            <Toastify show={show} setShow={setShow} bg={bg} message={message} />
            <BackDrop />
          </ToastProvider.Provider>{" "}
          <Footer />
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
