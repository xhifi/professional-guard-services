import Form from "components/careers/CareersForm";
const CareersMain = ({ data }) => {
  return (
    <main className="px-3 px-lg-5 mt-5">
      <div>
        <h3>Welcome to PGS SECURITY!</h3>
        <p>We have four areas of operation:</p>
        <ol>
          <li>Uniformed Security - Including Security Guards &amp; Security Dog Handlers</li>
          <li>Electronic Security</li>
          <li>Physical Security</li>
          <li>Cleaning</li>
        </ol>
        <p>
          We are constantly looking for the highest-calibre personnel to join us and help us expand our accomplished team of industry professionals.
          <br />
          Are you looking to excel in your career in the security industry? Are you committed to customer service and regularly go the extra mile to get the job done?
          <br />
          If you want to work for a company that shares your vision and professionalism, email us your CV at: info@pgssecurity.co.uk and we will get back to you as soon as
          possible.
          <br />
          Alternatively you can fill out this form to get on a que list but do not forget to send us your CV at the aforementioned email address.
          <br />
          Download the relevant froms from here: Application Form and Self Employment Contract
        </p>
      </div>
      <Form />
    </main>
  );
};

export default CareersMain;
