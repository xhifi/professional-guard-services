import { useEffect } from "react";
import Layout from "components/layouts/Main";

import Carousel from "components/carousel/Carousel";
import CallToAction from "components/calltoaction/callToAction";
import Service from "components/service/Service";

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
      <div className="container-fluid py-5 px-3 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {servicesData.services.map((v, i) => {
            return <Service key={i} heading={v.heading} content={v.content} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
