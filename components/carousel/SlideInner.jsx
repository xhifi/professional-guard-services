import Link from "next/link";
import Image from "next/image";
const SlideInner = ({ image, heading, text, link, linkText }) => {
  return (
    <div className="slide-inner position-relative">
      <Image src={image} layout="fill" objectFit="cover" className="slide-img img-fluid position-absolute" />
      <div className="container-fluid px-5 content">
        <div className="col-12 col-md-6 ps-0 ps-md-3">
          <h1>{heading}</h1>
          <p>{text}</p>
          <Link href={link} className="btn btn-lg btn-main" passHref>
            <button className="btn btn-lg btn-main">{linkText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlideInner;
