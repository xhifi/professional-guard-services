import "../styles/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "styles/certificate_swiper.css";
import { FormspreeProvider } from "@formspree/react";

function MyApp({ Component, pageProps }) {
  const projectID = "1903699552234372484";
  return (
    <FormspreeProvider project={projectID}>
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}

export default MyApp;
