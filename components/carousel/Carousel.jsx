import placeholder from "public/images/slides/1.png";

const Carouosel = () => {
  const img = placeholder.src;
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundImage: `url(${img})`, backgroundOrigin: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "top" }}
    >
      <div className="text-white px-3 px-lg-5">
        <h1>Protecting You Like Our Own</h1>
        <p>
          For whatever reason, if you want protection, we will protect you. We are experienced in providing security guard services to a range of industries including the corporate
          sector, construction sites or even an event.
        </p>
        <button className="btn btn-outline-light">Learn More</button>
      </div>
    </div>
  );
};

export default Carouosel;
