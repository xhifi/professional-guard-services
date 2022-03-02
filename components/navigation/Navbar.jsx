import Link from "next/link";
import data from "data/pages.json";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="container-fluid bg-dark">
      <nav className=" d-flex justify-content-end">
        <ul className="list-unstyled p-0 m-0">
          {data.map((page, index) => {
            return (
              <li className="d-inline" key={index}>
                <Link href={page.path} passHref>
                  <a className={`d-inline-block p-2 text-white text-decoration-none btn-hov-tst ${router.pathname === page.path ? "link-active" : ""}`}>{page.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
