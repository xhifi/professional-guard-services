import Link from "next/link";
import Image from "next/image";

const NavigationHeader = (props) => {
  const { phone, brand, title, link } = props;
  return (
    <div className="nav-header">
      <Link href={link} passHref>
        <a className="me-5">
          <Image src={`/images/${brand}`} alt={title} layout="intrinsic" height={60} width={350} />
        </a>
        {/* <img src={`/images/${brand}`} alt={title} height="60px" className="brand-logo" /> */}
      </Link>
      <Link href={`tel:${phone}`} passHref>
        <a className="btn-nav-special">{phone}</a>
      </Link>
    </div>
  );
};

export default NavigationHeader;
