import Layout from "components/layouts/Main";
import Hero from "components/Hero";

import CareersMain from "components/careers/Careers";
const data = "";
const Careers = () => {
  return (
    <Layout>
      <Hero heading="Job Careers at PGS&amp;FM Security" description="" />
      <CareersMain data={data} />
    </Layout>
  );
};

export default Careers;
