import React from "react";
import Aside from "../Aside/Aside";
import MainPage from "../Main_Page/MainPage";
import Navbar from "../Navbar/Navbar";
import "./User.scss";

const user = () => {
  return (
    <div className="profile">
      <Navbar />
      <main className="profile__content">
      <Aside />
      <MainPage/>
      </main>
    </div>
  );
};

export default user;
