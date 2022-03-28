import { useState } from "react";
import Link from "next/link";
import data from "data/pages.json";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="bg-dark d-flex align-items-right px-3 px-lg-5 d-md-none">
        <div className="d-flex align-items-center">
          <a href="https://www.facebook.com" target="_blank" className="btn btn-main me-1 d-inline-block d-md-none">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" className="btn btn-main me-1 d-inline-block d-md-none">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://www.googlemaps.com" target="_blank" className="btn btn-main me-1 d-inline-block d-md-none">
            <i className="bi bi-google"></i>
          </a>
        </div>
        <button className="ms-auto btn btn-light my-2 text-main" onClick={handleMenuClick}>
          <i className="me-1 bi bi-list"></i> <span>Menu</span>
        </button>
      </div>
      <div className="container-fluid bg-dark">
        <nav>
          <ul className={`list-unstyled p-0 m-0 align-items-md-center flex-wrap flex-column flex-md-row pt-md-2 pb-2 w-100 ${menuOpen ? "d-flex" : "d-none d-md-flex"}`}>
            {data.map((page, index) => {
              return (
                <li className="mb-1 mb-md-0 me-md-1" key={index}>
                  <Link href={page.path} passHref>
                    <a className={`d-block rounded p-2 text-white text-decoration-none btn-hov-tst ${router.pathname === page.path ? "link-active" : ""}`}>{page.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
