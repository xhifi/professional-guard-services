import { useEffect } from "react";
import Head from "next/head";

import Layout from "components/layouts/Main";

import Services from "components/service/Services";
import ProgressBar from "components/progress/ProgressBar";
import Accordion from "components/accordion/Accordion";
import Features from "components/feature/Features";
import Slider from "components/carousel/Slide";
import CallToAction from "components/calltoaction/Cta";

import { pullData } from "utils/pullData";

import data from "data/pages.json";
const homeData = pullData(data, "/");
const servicesData = pullData(data, "/services");

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  });

  return (
    <Layout>
      <Head></Head>
      <Slider data={homeData.slides} orientation="left" />
      {homeData && <CallToAction heading={homeData.callToAction.title} content={homeData.callToAction.content} />}
      {servicesData.services && <Services data={servicesData.services} />}
      <Features data={homeData.features} />
      <div className="container-fluid pb-5 px-md-5">
        <div className="row row-cols-1 row-cols-md-2">
          <Accordion data={homeData.solutions} />
          <ProgressBar data={homeData.expertise} />
        </div>
      </div>
    </Layout>
  );
}
