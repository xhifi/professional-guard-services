import Image from "next/image";
import placeholder from "public/images/features/sg-male-2.jpg";

const Feature = ({ orientation, content, heading, image }) => {
  return (
    <div className="container-fluid px-3 px-md-5 py-3">
      {orientation === "left" ? (
        <div className="row row-cols-1 row-cols-md-2 align-items-center">
          <div className="col-12 col-md-6 col-lg-7 feature-content order-1 order-sm-2 order-md-1">
            <h3>{heading}</h3>
            {content &&
              content.map((v, i) => {
                return <p key={i}>{v}</p>;
              })}
          </div>
          <div className="col-12 col-md-6 col-lg-5 px-0 d-flex align-items-center border-r overflow-hidden shadow feature-img mb-3 mb-md-0 order-2 order-sm-1 order-md-2">
            <Image src={image || placeholder} alt={heading} layout="intrinsic" width={509 * 2} height={339 * 2} quality={100} priority />
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 align-items-center">
          <div className="col-12 col-md-6 col-lg-5 p-0 d-flex align-items-center border-r overflow-hidden shadow feature-img mb-3 mb-md-0">
            <Image src={image || placeholder} alt={heading} layout="intrinsic" width={509 * 2} height={339 * 2} quality={100} priority />
          </div>
          <div className="col-12 col-md-6 col-lg-7 feature-content">
            <h3>{heading}</h3>
            {content &&
              content.map((v, i) => {
                return <p key={i}>{v}</p>;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Feature;
