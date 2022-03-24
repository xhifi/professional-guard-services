import Layout from "components/layouts/Main";
import Hero from "components/Hero";
import InspectionFrom from "components/siteInspection/Form";

const SiteInspectionApplication = () => {
  return (
    <Layout>
      <Hero heading="Site Inspection Application Form" description="Here you can apply for a basic Site Inspection Criteria" />
      <div className="container col-12 col-md-8 py-5">
        <InspectionFrom />
      </div>
    </Layout>
  );
};

export default SiteInspectionApplication;
