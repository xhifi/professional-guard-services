import { useEffect } from "react";
import Head from "next/head";

import Layout from "components/layouts/Main";

import CallToAction from "components/calltoaction/callToAction";
import Services from "components/service/Services";
import ProgressBar from "components/progress/ProgressBar";
import Accordion from "components/accordion/Accordion";
import Features from "components/feature/Features";
import SlideX from "components/carousel/Slide";

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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Saira:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SlideX />
      {homeData && <CallToAction heading={homeData.callToAction.title} content={homeData.callToAction.content} />}
      {servicesData.services && <Services data={servicesData.services} />}
      <Features data={homeData.features} />
      <div className="container-fluid py-5 px-md-5">
        <div className="row row-cols-1 row-cols-md-2">
          <Accordion data={homeData.solutions} />
          <ProgressBar data={homeData.expertise} />
        </div>
      </div>
    </Layout>
  );
}
