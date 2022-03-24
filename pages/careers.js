import Layout from "components/layouts/Main";
import Hero from "components/Hero";

import CareersMain from "components/careers/Careers";
const data = "";
const Careers = () => {
  return (
    <Layout>
      <Hero heading="Job Careers at PGS Security" description="Lorem Ipsum" />
      <CareersMain data={data} />
    </Layout>
  );
};

export default Careers;
