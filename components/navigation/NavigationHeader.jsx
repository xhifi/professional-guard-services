import Link from "next/link";
import Image from "next/image";

const NavigationHeader = (props) => {
  const { phone, brand, title, link } = props;
  return (
    <div className="nav-header">
      <Link href={link} passHref>
        <a>
          <Image alt={title} src={`/images/${brand}`} layout="intrinsic" width={300} height={50} className="img-fluid" />
        </a>
      </Link>

      <div>
        <a href="https://www.facebook.com/pgsfmuk" target="_blank" rel="noreferrer" className="bg-main btn-main btn me-1 d-none d-md-inline-block">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="bg-main btn-main btn me-1 d-none d-md-inline-block">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://business.google.com/dashboard/l/01627350215998689711" target="_blank" rel="noreferrer" className="bg-main btn-main btn me-1 d-none d-md-inline-block">
          <i className="bi bi-google"></i>
        </a>
        <a href="https://www.instagram.com/pgsfmuk/" target="_blank" rel="noreferrer" className="bg-main btn-main btn me-1 d-none d-md-inline-block">
          <i className="bi bi-instagram"></i>
        </a>
        <a className="ms-3 ms-md-0 btn btn-main d-none d-md-inline-block" href={`tel:${phone}`}>
          <i className="bi bi-telephone-fill me-2"></i>
          {phone}
        </a>
      </div>
    </div>
  );
};

export default NavigationHeader;
