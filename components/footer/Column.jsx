import Link from "next/link";
const Column = ({ list, title }) => {
  return (
    <div className="col text-white px-3">
      <h5>{title}</h5>
      <ul className="list-unstyled m-0 p-0">
        {list.map((v, i) => {
          return (
            <li key={i}>
              <Link href={v.link} passHref>
                <a className="text-decoration-none text-white">{v.text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Column;
