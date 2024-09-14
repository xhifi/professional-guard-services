import Link from "next/link";
import Image from "next/image";

const LeftOrientation = ({ heading, text, link, linkText }) => {
  return (
    <div className="container-fluid px-5 content">
      <div className="col-12 col-md-6 ps-0 ps-md-3">
        <h1>{heading}</h1>
        <p>{text}</p>
        <Link href={link} className="btn btn-lg btn-main" passHref>
          <button className="btn btn-lg btn-main">{linkText}</button>
        </Link>
      </div>
    </div>
  );
};

const RightOrientation = ({ heading, text, link, linkText }) => {
  return (
    <div className="container-fluid px-5 content-right d-flex">
      <div className="col-12 col-md-6 ps-0 ps-md-3 me-auto">
        <h1>{heading}</h1>
        <p>{text}</p>
        <Link href={link} className="btn btn-lg btn-main" passHref>
          <button className="btn btn-lg btn-main">{linkText}</button>
        </Link>
      </div>
    </div>
  );
};

const CenterOrientation = ({ heading, text, link, linkText }) => {
  return (
    <div className="container-fluid px-5 content-center">
      <div className="col-12 ps-0 text-center">
        <h1>{heading}</h1>
        <p className="px-lg-5">{text}</p>
        <Link href={link} className="btn btn-lg btn-main" passHref>
          <button className="btn btn-lg btn-main">{linkText}</button>
        </Link>
      </div>
    </div>
  );
};

const SlideInner = ({ image, heading, text, link, linkText, orientation }) => {
  return (
    <div className="slide-inner position-relative">
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        className="object-fit-cover slide-img img-fluid position-absolute"
        alt={heading}
        priority
      />
      {orientation === "left" && <LeftOrientation heading={heading} text={text} link={link} linkText={linkText} />}
      {orientation === "right" && <RightOrientation heading={heading} text={text} link={link} linkText={linkText} />}
      {orientation === "center" && <CenterOrientation heading={heading} text={text} link={link} linkText={linkText} />}
    </div>
  );
};

export default SlideInner;
