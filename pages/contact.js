import Layout from "components/layouts/Main";
import Hero from "components/Hero";
import ContactForm from "components/form/ContactForm";

import data from "data/pages.json";
import { pullData } from "utils/pullData";

const contactData = pullData(data, "/contact");

const contact = () => {
  return (
    <Layout>
      <Hero heading={contactData.title || "FIX HEADING ERROR"} map="true" />
      <main className="container-fluid px-3 py-5 p-md-5">
        <div className="row">
          <div className="col-12 col-md-8 mb-3 mb-md-0">
            <ContactForm />
          </div>
          <div className="col-12 col-md-4">Details Portion</div>
        </div>
      </main>
    </Layout>
  );
};

export default contact;
