import React from "react";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <NavBar></NavBar>
      </div>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
