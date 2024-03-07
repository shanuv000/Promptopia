import React from "react";
import Head from "next/head";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import prompImg from "../promp1.jpg";
const RootLayout = ({ children }) => {
  const promp1 = prompImg;
  const siteUrl = "https://promptopia-shanuv000.vercel.app/";
  return (
    <div>
      <Head>
        {/* Basic meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Title and Description */}
        <title>Promptopia</title>
        <meta name="description" content="Discover & Share AI Prompts" />

        {/* Open Graph meta tags (Facebook) */}
        <meta property="og:title" content="Promptopia" />
        <meta property="og:description" content="Discover & Share AI Prompts" />
        <meta property="og:image" content={promp1} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags (Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shanuv000" />
        <meta name="twitter:title" content="Promptopia" />
        <meta
          name="twitter:description"
          content="Discover & Share AI Prompts"
        />
        <meta name="twitter:image" content={promp1} />

        {/* LinkedIn meta tags */}
        <meta property="og:title" content="Promptopia" />
        <meta property="og:description" content="Discover & Share AI Prompts" />
        <meta property="og:image" content={promp1} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
      </Head>
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
    </div>
  );
};

export default RootLayout;
