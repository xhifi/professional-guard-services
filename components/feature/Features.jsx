import Feature from "./Feature";

export default function Features({ data }) {
  return (
    <div className="container-fluid px-md-3 py-5">
      {data.map((v, i) => {
        return <Feature key={i} orientation={v.orientation} content={v.content.p} heading={v.heading} image={`/images/features/${v.image}`} />;
      })}
    </div>
  );
}
