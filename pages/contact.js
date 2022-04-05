import { useState, useEffect } from "react";

import Layout from "components/layouts/Main";
import Hero from "components/Hero";
import ContactForm from "components/form/ContactForm";
import SiteInspection from "components/siteInspection/Form";
import Careers from "components/Careers/Form";
import SideDetails from "components/form/ContactFormSideBar";

import data from "data/pages.json";
import siteMetaData from "data/siteData.json";
import { pullData } from "utils/pullData";

const contactData = pullData(data, "/contact");

const contact = () => {
  const [formValue, setFormValue] = useState("null");

  return (
    <Layout>
      <Hero heading={contactData.title || "FIX HEADING ERROR"} map="true" />
      <main className="container-fluid px-3 py-5 p-md-5">
        <div className="row">
          <div className="col-12 col-md-8 mb-3 mb-md-0">
            <div>
              <span className="h3 mb-4">Chose a mode of contact</span>
              <div className="my-3">
                <select className="form-select h4" aria-label="Default select example" onChange={(e) => setFormValue(e.target.value)}>
                  <option selected disabled>
                    Select Contact Criteria
                  </option>
                  <option value="1">Site Inspection Query</option>
                  <option value="2">Applying for Job</option>
                  <option value="3">General Query</option>
                </select>
              </div>
            </div>
            {formValue === "1" && <SiteInspection />}
            {formValue === "2" && <Careers />}
            {formValue === "3" && <ContactForm />}
          </div>
          <div className="col-12 col-md-4">
            <SideDetails siteData={siteMetaData} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default contact;
