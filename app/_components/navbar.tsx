"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  console.log("pathname => ", pathName);

  const navs = [
    {
      name: "Home",
      link: "/",
      active: pathName === "/",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
      active: pathName.startsWith("/dashboard"),
    },
    {
      name: "Products",
      link: "/products",
      active: pathName.startsWith("/products"),
    },
    {
      name: "Docs",
      link: "/docs",
      active: pathName.startsWith("/docs"),
    },
  ];

  return (
    <nav>
      <ul>
        {navs.map((nav, i) => (
          <li key={i}>
            <Link href={nav.link} className={nav.active ? "active" : ""}>
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
