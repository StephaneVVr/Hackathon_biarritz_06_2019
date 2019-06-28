import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        className="container-fluid"
        style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "12vh" }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
export default Layout;
