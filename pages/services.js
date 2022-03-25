import Layout from "components/layouts/Main";
import Hero from "components/Hero";
import ServiceCard from "components/service/ServiceCard";

const Services = () => {
  return (
    <Layout>
      <Hero heading="Services" description="Lorem Ipsum" />
      <div className="container-fluid px-3 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <ServiceCard />
        </div>
      </div>
    </Layout>
  );
};

export default Services;
