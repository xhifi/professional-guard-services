import Link from "next/link";
import data from "data/pages.json";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-dark d-flex align-items-right px-3 px-lg-5 d-md-none">
        <button className="ms-auto btn btn-main my-2">
          <i className="me-1 bi bi-list"></i> <span>Menu</span>
        </button>
      </div>
      <div className="container-fluid bg-dark">
        <nav className="">
          <ul className="list-unstyled p-0 m-0 d-flex align-items-md-center flex-wrap flex-column flex-md-row py-2 w-100">
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
