import Link from "next/link";

const NavigationHeader = (props) => {
  const { phone, brand, title, link } = props;
  return (
    <div className="nav-header">
      <Link href={link} passHref>
        <img src={`/images/${brand}`} alt={title} height="60px" className="brand-logo" />
      </Link>
      <Link href={`tel:${phone}`} passHref>
        <a className="btn-nav-special">{phone}</a>
      </Link>
    </div>
  );
};

export default NavigationHeader;
