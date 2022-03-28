import Link from "next/link";

const CallToAction = ({ heading, content, refLink, refText }) => {
  return (
    <div className="container-fluid px-3 px-lg-5 py-5 text-center bg-main bg-gradient shadow-lg">
      <h2>{heading}</h2>
      <>
        {content &&
          content.map((v, i) => {
            return <p key={i}>{v.p}</p>;
          })}
      </>
      {refLink && refText && (
        <Link href={refLink} passHref>
          <button className="btn btn-dark">{refText}</button>
        </Link>
      )}
    </div>
  );
};

export default CallToAction;
