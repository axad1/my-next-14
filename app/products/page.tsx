import Link from "next/link";

export default function Products() {
  const products = ["one", "two", "three", "four", "five"];
  return (
    <>
      <div>Products</div>
      <ol className="list-decimal">
        {products.map((p, i) => (
          <li key={i}>
            <Link href={"/products/" + (i + 1)}>{p}</Link>
          </li>
        ))}
        <li>
          <Link href={"/products/100"}>{100}</Link>
        </li>
      </ol>
    </>
  );
}
