import Layout from "components/layouts/Main";
import Hero from "components/Hero";
import ServiceSprite from "components/service/ServiceSprite";
import ServiceCard from "components/service/ServiceCard";

import { pullData } from "utils/pullData";
import data from "data/pages.json";
import Feature from "components/feature/Feature";
const servicesData = pullData(data, "/services");

const Services = () => {
  return (
    <Layout>
      <Hero heading="Services" />
      <div className="container-fluid px-3 py-5 px-lg-5">
        <h3>We understand your problems</h3>
        <p>
          No two sites have identical security issues, so we consistently develop our range of comprehensive and joined-up security services. We provide the best choice of
          reliable, effective and appropriate ways to meet your individual site requirements, risks and budgets. <br />
          Below are a few of the areas that we work in and some outlook of the security services that we provide. Please note, these are not all the services that we provide. If
          you need anything to be done, you can let us know in a query at our Contact Page.
        </p>
      </div>
      <div className="container-fluid px-3 px-lg-5 pb-5">
        <ServiceSprite data={servicesData.sprites} />
      </div>
      <div className="container-fluid px-3 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <ServiceCard data={servicesData.miscellaneous} />
        </div>
      </div>
      {servicesData.features.map((v, i) => {
        return (
          <div className="container-fluid px-3 px-lg-5 mb-5" key={i}>
            <Feature heading={v.heading} image={`/images/features/${v.image}`} orientation="right" content={[...v.content.p, ...v.content.ul]} />
          </div>
        );
      })}
    </Layout>
  );
};

export default Services;
