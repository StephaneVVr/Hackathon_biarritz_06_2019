import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        className="container-fluid"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
export default Layout;
