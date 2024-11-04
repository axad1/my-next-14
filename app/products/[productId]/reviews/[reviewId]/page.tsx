import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const { productId, reviewId } = params;

  return {
    title: "Product-" + productId + "-Review-" + reviewId,
  };
};
export default function Review({ params }: Props) {
  const { reviewId } = params;

  return <div>Review - {reviewId}</div>;
}
