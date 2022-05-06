import Link from "next/link";
import SideDetails from "components/form/ContactFormSideBar";
import siteMetaData from "data/siteData";
const Hero = ({ heading, description, map, buttonText, buttonRef, headingAlignment, contactInformation }) => {
  return (
    <div className="container-fluid px-md-5 py-4 bg-main bg-gradient text-white">
      <h2 className={`text-bold text-${headingAlignment}`}>{heading}</h2>
      {buttonText && buttonRef && (
        <div className="text-center mb-4">
          <Link href={buttonRef}>
            <a className="btn btn-lg btn-light">{buttonText}</a>
          </Link>
        </div>
      )}
      {description && <p className="mb-0">{description}</p>}
      {map === "true" && (
        <div className="map-responsive">
          <iframe
            src="https://maps.google.com/maps?q=Challenge%20House%20Business%20Center%20616%20Mitcham%20Road%2C%20Croydon%20CR0%203AA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            // style="border:0; border-radius: 20px; height: 300px;"
            className="border-r"
            allowFullScreen={true}
            width="100%"
            height="300"
          ></iframe>
        </div>
      )}
      {contactInformation && <SideDetails siteData={siteMetaData} />}
    </div>
  );
};

export default Hero;
