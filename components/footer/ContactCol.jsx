import Link from "next/link";
import Image from "next/image";
const ContactCol = ({ data }) => {
  return (
    <div className="col-12 col-md-4 text-white px-3 mb-4 mb-md-0">
      <Link href="/" passHref>
        <a className="me-5 d-block">
          <Image src={`/images/${data.logoLight}`} alt={data.title} layout="responsive" width={300} height={50} />
        </a>
      </Link>
      <p className="m-0">{data.address}</p>
      <p className="m-0">{data.phone}</p>
    </div>
  );
};

export default ContactCol;
