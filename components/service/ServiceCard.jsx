import placeholder from "public/images/features/sg-male-1.jpg";
import Image from "next/image";

const ServiceCard = () => {
  return [...Array(3)].map((v, i) => {
    return (
      <div className="col mb-4" key={i}>
        <div className="card h-100">
          <div className="image-container d-block">
            <Image src={placeholder.src} layout="intrinsic" width={500} height={300} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">Uniformed Security</h5>
            <ul className="list-unstyled text-center">
              <li className="p-1 bg-main m-1 rounded">Licensed Security Guards</li>
              <li className="p-1 bg-main m-1 rounded">Security Dog Handlers</li>
              <li className="p-1 bg-main m-1 rounded">Mobile Patrols</li>
              <li className="p-1 bg-main m-1 rounded">Key Holding and Alarm Response</li>
              <li className="p-1 bg-main m-1 rounded">Enforcement Services</li>
            </ul>
          </div>
        </div>
      </div>
    );
  });
};

export default ServiceCard;
