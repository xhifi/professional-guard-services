import Link from "next/link";
const ContactCol = ({ data }) => {
  return (
    <div className="col-12 col-md-4 text-white px-3 mb-3 mb-md-0">
      <Link href="/" passHref>
        <a>
          <img src={`/images/${data.logo}`} alt={data.title} className="img-fluid mb-2" />
        </a>
      </Link>
      <p className="m-0">{data.address}</p>
      <p className="m-0">{data.phone}</p>
    </div>
  );
};

export default ContactCol;
