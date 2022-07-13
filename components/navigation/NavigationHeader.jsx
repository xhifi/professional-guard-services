import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const NavigationHeader = (props) => {
  const { phone, brand, title, link } = props;
  return (
    <div className="nav-header">
      <Link href={link} passHref>
        <motion.a initial={{ y: -100, opacity: 0 }} transition={{ duration: 0.5, type: "spring", stiffness: 100 }} animate={{ y: 0, opacity: 1 }}>
          <Image alt={title} src={`/images/${brand}`} layout="intrinsic" width={300} height={50} className="img-fluid" />
        </motion.a>
      </Link>

      <div>
        <motion.a
          href="https://www.facebook.com/pgsfmuk"
          target="_blank"
          rel="noreferrer"
          className="bg-main btn-main btn me-1 d-none d-md-inline-block"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="bi bi-facebook"></i>
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
          className="bg-main btn-main btn me-1 d-none d-md-inline-block"
        >
          <i className="bi bi-twitter"></i>
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9, transition: { duration: 0.01 } }}
          href="https://business.google.com/dashboard/l/01627350215998689711"
          target="_blank"
          rel="noreferrer"
          className="bg-main btn-main btn me-1 d-none d-md-inline-block"
        >
          <i className="bi bi-google"></i>
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          href="https://www.instagram.com/pgsfmuk/"
          target="_blank"
          rel="noreferrer"
          className="bg-main btn-main btn me-1 d-none d-md-inline-block"
        >
          <i className="bi bi-instagram"></i>
        </motion.a>
        <motion.a
          className="ms-3 ms-md-0 btn btn-main d-none d-md-inline-block"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          href={`tel:${phone}`}
        >
          <i className="bi bi-telephone-fill me-2"></i>
          {phone}
        </motion.a>
      </div>
    </div>
  );
};

export default NavigationHeader;
