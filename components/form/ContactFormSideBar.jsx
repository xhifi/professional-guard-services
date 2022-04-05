import Link from "next/link";

const ContactFormSideBar = ({ siteData }) => {
  return (
    <div>
      <span className="h3">Contact Information</span>
      <ul className="list-unstyled">
        <li>
          <i class="bi text-main bi-geo-alt-fill me-2"></i>
          {siteData.address}
        </li>
        <li>
          <a className="text-black text-decoration-none" href={`tel:${siteData.phone}`}>
            <i class="bi text-main bi-telephone-fill me-2"></i>
            {siteData.phone}
          </a>
        </li>
        <li>
          <a className="text-black text-decoration-none" href={`mailto:${siteData.email}`}>
            <i class="bi text-main bi-envelope-fill me-2"></i>
            {siteData.email}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactFormSideBar;
