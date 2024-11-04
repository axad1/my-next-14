import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const id = params.productId;
  return { title: "Product-" + id, description: "Details of Product-" + id };
};

export default function page({ params }: Props) {
  const id = params.productId;
  if (parseInt(id) === 100) throw new Error("Product Error");
  else if (parseInt(id) > 5) notFound();
  return (
    <div>
      <h1>Product - {id}</h1>
      <Link href={`/products/${id}/reviews`}>Reviews</Link>
    </div>
  );
}
