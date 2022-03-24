const Hero = ({ heading, description, map }) => {
  return (
    <div className="container-fluid px-md-5 pt-4 pb-5 bg-main text-white">
      <h2 className="text-bold">{heading}</h2>
      {description && <p className="mb-0">{description}</p>}
      {map === "true" && (
        <div className="map-responsive">
          <iframe
            src="https://maps.google.com/maps?q=Challenge%20House%20Business%20Center%20616%20Mitcham%20Road%2C%20Croydon%20CR0%203AA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            // style="border:0; border-radius: 20px; height: 300px;"
            className="border-r"
            allowFullScreen="true"
            width="100%"
            height="300"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Hero;
