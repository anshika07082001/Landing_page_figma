import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <div className="container margin">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
};

export default Main;