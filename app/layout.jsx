import React from "react";
import Heading from "@components/Heading";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import prompImg from "../promp1.jpg";
const RootLayout = ({ children }) => {
  return (
    <main>
      <Heading />
      {/* Rest of the layout */}
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
      /
    </main>
  );
};

export default RootLayout;
