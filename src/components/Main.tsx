import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <div className="container margin">
      {/* rendering of header component */}
      <Header/>
      {/* rendering of body component */}
      <Body/>
      {/* rendering of footer component */}
      <Footer/>
    </div>
  );
};

export default Main;