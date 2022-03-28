import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/brand-bg.svg";

const CallToAction = ({ heading, content, refLink, refText }) => {
  return (
    <div className="container-fluid px-3 px-lg-5 py-5 text-center bg-main bg-gradient shadow-lg cta-section">
      <span className="stamp-bg">
        <Image src={Logo} alt={heading} layout="intrinsic" width={300} height={300} quality={75} />
      </span>
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
