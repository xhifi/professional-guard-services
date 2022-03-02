import { useEffect } from "react";
import Layout from "components/layouts/Main";

import Carousel from "components/carousel/Carousel";
import CallToAction from "components/calltoaction/callToAction";
import Services from "components/service/Services";

import data from "data/pages.json";
import { pullData } from "utils/pullData";

const homeData = pullData(data, "/");
const servicesData = pullData(data, "/services");

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  });

  return (
    <Layout>
      <Carousel />
      {homeData && <CallToAction heading={homeData.callToAction.title} content={homeData.callToAction.content} />}
      {servicesData.services && <Services data={servicesData.services} />}
    </Layout>
  );
}
