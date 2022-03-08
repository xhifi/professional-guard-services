import { useEffect } from "react";
import Layout from "components/layouts/Main";

import Carousel from "components/carousel/Carousel";
import CallToAction from "components/calltoaction/callToAction";
import Services from "components/service/Services";
import ProgressBar from "components/progress/ProgressBar";
import Accordion from "components/accordion/Accordion";
import Features from "components/feature/Features";
import Slide from "components/carousel/slide";

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
      <Features data={homeData.features} />
      <div className="container-fluid py-5 px-md-5">
        <div className="row row-cols-1 row-cols-md-2">
          <Accordion data={homeData.solutions} />
          <ProgressBar data={homeData.expertise} />
        </div>
      </div>
      <Slide />
    </Layout>
  );
}
