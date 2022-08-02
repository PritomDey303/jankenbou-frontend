import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/CommonComponents/Footer/Footer";
import Navigation from "./Components/CommonComponents/Navigation/Navigation";
import Home from "./Components/Pages/Home/Home";
import PostAdd from "./Components/Pages/PostAdd/PostAdd";
import SignIn from "./Components/Pages/SignIn/SignIn";
import SignUp from "./Components/Pages/SignUp/SignUp";
import ViewAdd from "./Components/Pages/ViewAdd/ViewAdd";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route exact path="/signin" element={<SignIn />}></Route>
          <Route path="/addvertise/:id" element={<ViewAdd />}></Route>
          <Route path="/post-add" element={<PostAdd />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
