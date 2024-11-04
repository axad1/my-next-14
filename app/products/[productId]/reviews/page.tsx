import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const id = params.productId;
  return {
    title: "Product-" + id + "-Reviews",
  };
};

export default function Reviews({ params }: Props) {
  const reviews = ["one", "two", "three"];
  const id = params.productId ?? 0;

  return (
    <>
      <div>Reviews</div>
      <ol>
        {reviews.map((r, i) => (
          <li key={i}>
            <Link href={`/products/${id}/reviews/${i + 1}`}>{r}</Link>
          </li>
        ))}
      </ol>
    </>
  );
}
