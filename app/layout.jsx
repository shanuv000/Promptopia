import React from "react";
import Head from "@components/Head";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import prompImg from "../promp1.jpg";
const RootLayout = ({ children }) => {
  const promp1 = prompImg;
  const siteUrl = "https://promptopia-shanuv000.vercel.app/";
  return (
    <>
      {/* <Head /> */}
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
    </>
  );
};

export default RootLayout;
