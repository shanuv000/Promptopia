import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
  keywords: ["AI", "Prompts", "Promptopia", "Vaibhav"],
  metadataBase: new URL("https://promptopia-shanuv000.vercel.app/"),
};

const RootLayout = ({ children }) => (
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
);

export default RootLayout;
