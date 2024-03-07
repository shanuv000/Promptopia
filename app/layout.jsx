import React from "react";
// import Heading from "@components/Heading";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import prompImg from "../promp1.jpg";
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
  image: { prompImg },
};
const RootLayout = ({ children }) => {
  return (
    <main>
      {/* <Heading /> */}
      {/* Rest of the layout */}
      <html lang="en">
        <body>
          <Provider>
            <div className="main">
              <div className="gradient" />
            </div>
            <main className="app">
              <Nav />
              {children}
            </main>
          </Provider>
        </body>
      </html>
    </main>
  );
};

export default RootLayout;
