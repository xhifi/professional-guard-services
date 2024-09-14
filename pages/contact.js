import { useState } from "react";

import Layout from "components/layouts/Main";
import Hero from "components/Hero";
import ContactForm from "components/form/ContactForm";
import SiteInspection from "components/siteInspection/Form";
import Careers from "components/careers/CareersForm";

import data from "data/pages.json";

import { pullData } from "utils/pullData";
import Complaints from "components/form/Complaints";

const contactData = pullData(data, "/contact");

const Contact = () => {
  const [formValue, setFormValue] = useState("null");

  return (
    <Layout>
      <Hero heading={contactData.title} map="false" contactInformation />
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
                  <option value="1">Report our company officer</option>
                  <option value="2">Applying for job</option>
                  <option value="3">General query</option>
                  <option value="4">Site complaints</option>
                </select>
              </div>
            </div>
            {formValue === "1" && <SiteInspection />}
            {formValue === "2" && <Careers />}
            {formValue === "3" && <ContactForm />}
            {formValue === "4" && <Complaints />}
          </div>
          <div className="col-12 col-md-4">
            <div className="map-responsive">
              <iframe
                src="https://maps.google.com/maps?q=Challenge%20House%20Business%20Center%20616%20Mitcham%20Road%2C%20Croydon%20CR0%203AA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                // style="border:0; border-radius: 20px; height: 300px;"
                className="border-r bg-light"
                allowFullScreen={true}
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
