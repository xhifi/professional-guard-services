import Link from "next/link";
const Service = ({ heading, content, refLink, refText }) => {
  return (
    <div className="col">
      <div className="card h-100 justify-content-center border-0 text-center">
        <div className="bg-main rounded-circle mb-3 mx-auto" style={{ width: "110px", height: "110px" }}></div>
        <h2>{heading}</h2>
        <>
          {content &&
            content.map((v, i) => {
              return <p key={i}>{v.p}</p>;
            })}
        </>
        {/* <Link href={refLink || "/"} passHref>
          <button className="btn btn-sm btn-main w-50">{refText}</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Service;
