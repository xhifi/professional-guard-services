import { useRouter } from "next/router";

import Head from "next/head";
import Navigation from "components/navigation/Navigation";
import Footer from "components/footer/Footer";

import footerData from "../../data/footer.json";
import contactData from "../../data/siteData.json";
import pages from "../../data/pages.json";

const Main = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          {pages.map((page) => {
            if (router.pathname === page.path) {
              return `${contactData.title} | ${page.title}`;
            }
          })}
        </title>
        <meta name="description" content={contactData.description} />
        <meta
          property="og:title"
          content={`${pages.map((page) => {
            if (router.pathname === page.path) {
              return `${contactData.title} | ${page.title}`;
            }
          })}`}
        />
        <meta property="og:description" content={contactData.description} />
        <meta property="og:url" content={`https://pgssecurity.co.uk`} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <Footer data={footerData} contactData={contactData} />
    </>
  );
};

export default Main;
