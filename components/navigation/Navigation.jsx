import NavigationHeader from "./NavigationHeader";
import Navbar from "./Navbar";

import siteMetadata from "data/siteData.json";

const Navigation = () => {
  return (
    <>
      <NavigationHeader brand={siteMetadata.logo} title={siteMetadata.title} phone={siteMetadata.phone} link="/" />
      <Navbar />
    </>
  );
};

export default Navigation;
