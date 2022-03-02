import Head from "next/head";
import Navigation from "components/navigation/Navigation";
import Footer from "components/footer/Footer";

import footerData from "../../data/footer.json";
import contactData from "../../data/siteData.json";

const Main = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <Footer data={footerData} contactData={contactData} />
    </>
  );
};

export default Main;
