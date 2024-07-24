import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container max-w-6xl mx-auto max-lg:px-6 flex justify-between py-3">
      <Link href={"/"}>
        <div className="w-40 h-14">
          <Image
            src={"./assets/logo.svg"}
            alt="logo"
            width={500}
            height={500}
          />
        </div>
      </Link>

      <ul className="flex gap-5 text-sm text-[#9B59BB] font-semibold items-center">
        <li className="animate-hover">
          <Link href="/">Beranda</Link>
        </li>
        <li className="animate-hover">
          <Link href="/contact-us">Contact us</Link>
        </li>
      </ul>
    </header>
  );
}
