import Link from "next/link";
import Image from "next/image";

const NavigationHeader = (props) => {
  const { phone, brand, title, link } = props;
  return (
    <div className="nav-header">
      <Link href={link} passHref>
        <Image alt={title} src={`/images/${brand}`} layout="intrinsic" width={300} height={50} className="img-fluid" />
      </Link>

      <Link href={`tel:${phone}`} passHref>
        <a className="ms-3 ms-md-0 btn-nav-special">
          <i className="bi bi-telephone-fill me-2"></i>
          {phone}
        </a>
      </Link>
    </div>
  );
};

export default NavigationHeader;
