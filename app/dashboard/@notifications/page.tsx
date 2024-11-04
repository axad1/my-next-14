import Link from "next/link";

export default function Notifications() {
  return (
    <div
      style={{
        border: "thin solid blue",
        height: 100,
      }}
    >
      <p>Notifications</p>
      <Link href="/dashboard/archived">Archived</Link>
    </div>
  );
}
