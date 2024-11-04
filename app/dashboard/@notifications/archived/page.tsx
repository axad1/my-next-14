import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <div
      style={{
        border: "thin solid blue",
        height: 100,
      }}
    >
      <p>Archived Notifications</p>
      <Link href="/dashboard">Default</Link>
    </div>
  );
}
