import Layout from "components/layouts/Main";
import Hero from "components/Hero";
import Service from "components/service/Service";
import Slider from "components/carousel/Slide";

import { pullData } from "utils/pullData";
import data from "data/pages.json";
const cleaningData = pullData(data, "/cleaning");

const Cleaning = () => {
  return (
    <Layout>
      <Hero
        heading="Our Cleaning Services"
        description="PGSFM Security Services has a totally seperate division as well that works professionally in its own rights. Over time we have accumulated certain experience in the specefic field of cleaning. We provide a comprehensive solution to our clients regarding cleaning all sorts of objects and places, whether you want a contracted cleaning service for your whole organization such as school/hospital/resturant etc or just some specefic parts of your company's domains such as warehouses or offices. Here at PGSFM Security we consider everything a part of public service and we try to entertain and provide a comprehensive sets of services as their requirement. Everything from fabrics to actual complete sites, we provide all sorts of cleaning solutions."
      />
      <div className="container-fluid px-3 px-lg-5">
        <div className="row row-cols-1 row-cols-md-3 py-5">
          {cleaningData.services &&
            cleaningData.services.map((v, i) => {
              return (
                <Service
                  heading={v.heading}
                  content={v.content.map((g, i) => {
                    return g;
                  })}
                  icon={v.icon}
                  key={i}
                />
              );
            })}
        </div>
      </div>
      {cleaningData.slides && <Slider data={cleaningData.slides} orientation="center" />}
    </Layout>
  );
};

export default Cleaning;
