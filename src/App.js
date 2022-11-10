import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Signup />} path="/signup" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
