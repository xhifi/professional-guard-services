import Column from "./Column";
import ContactColumn from "./ContactCol";

const Footer = ({ data, contactData }) => {
  return (
    <>
      <div className="container-fluid px-4 py-5 bg-dark site-footer">
        <div className="row">
          <ContactColumn data={contactData} />
          {data.map((item, index) => {
            return <Column key={index} list={item.subjects} title={item.title} />;
          })}
        </div>
      </div>
      <div className="bg-dark py-2 text-center text-secondary border-top border-secondary">
        <p>{`Registered in England & Wales # ${contactData.reg} | All Rights Reserved Ⓒ`}</p>
      </div>
    </>
  );
};

export default Footer;
