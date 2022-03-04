import Feature from "./Feature";
import placeholder from "public/images/features/sg_female.jpg";
export default function Features({ data }) {
  return (
    <div className="container-fluid px-md-3 py-5">
      {data.map((v, i) => {
        return (
          <Feature
            key={i}
            orientation={v.orientation}
            content={v.content.map((c) => {
              return c.p;
            })}
            heading={v.heading}
            image={`/images/features/${v.image}`}
          />
        );
      })}
    </div>
  );
}
