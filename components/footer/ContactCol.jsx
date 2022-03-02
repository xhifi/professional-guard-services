import Link from "next/link";
import Image from "next/image";
const ContactCol = ({ data }) => {
  return (
    <div className="col-12 col-md-4 text-white px-3 mb-4 mb-md-0">
      <Link href="/" passHref>
        <a className="me-5">
          <Image src={`/images/${data.logoLight}`} alt={data.title} layout="intrinsic" height={60} width={370} />
        </a>
        {/* <a>
          <img src={`/images/${data.logoLight}`} alt={data.title} className="img-fluid mb-2" />
        </a> */}
      </Link>
      <p className="m-0">{data.address}</p>
      <p className="m-0">{data.phone}</p>
    </div>
  );
};

export default ContactCol;
