import Link from "next/link";

const ContactFormSideBar = ({ siteData }) => {
  return (
    <div>
      <span className="h3">Contact Information</span>
      <ul className="list-unstyled">
        <li>{siteData.address}</li>
        <li>
          <a className="text-black text-decoration-none" href={`tel:${siteData.phone}`}>
            {siteData.phone}
          </a>
        </li>
        <li>
          <a className="text-black text-decoration-none" href={`mailto:${siteData.email}`}>
            {siteData.email}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactFormSideBar;
