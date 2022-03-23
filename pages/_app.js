import "../styles/main.scss";
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
