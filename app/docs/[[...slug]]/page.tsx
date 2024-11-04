type Props = {
  params: {
    slug: string[];
  };
};
export default function Docs({ params }: Props) {
  const slug = params.slug || [];

  switch (slug.length) {
    case 1:
      return <p>Viewing doc {slug[0]}</p>;
    case 2:
      return (
        <p>
          Viewing doc {slug[0]} and topic {slug[1]}
        </p>
      );
    case 3:
      return (
        <p>
          Viewing doc {slug[0]} and topic {slug[1]} and line {slug[2]}
        </p>
      );
    default:
      return (
        <>
          <h3>Docs List</h3>
          {[1, 2, 3].map((d) => (
            <li key={d}>doc - {d}</li>
          ))}
        </>
      );
  }
}
