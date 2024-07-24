import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="flex max-lg:flex-col-reverse justify-between">
      <div className="flex mt-5 lg:mt-20 flex-col gap-6 w-full">
        <h1 className="text-[#9B59BB] font-semibold text-4xl leading-normal">
          Hubungi Kami
        </h1>
        <h2>
          Jangan ragu untuk menghubungi kami dan temukan solusi terbaik untuk
          kebutuhan pengiriman Anda.
        </h2>
        <div className="min-h-[2px] bg-[#9B59BB]" />

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Kantor Pusat & Logistik</h2>
          <p>Jl. Tomang Raya No.11 Jakarta Barat 11440 Indonesia</p>
        </div>
        <ul className="grid gap-2">
          <li className="flex gap-2 animate-hover">
            <Image
              src="/assets/support.png"
              alt="Hero"
              width={30}
              height={30}
              objectFit="contain"
              className="w-4 object-contain"
            />
            <Link href="tel:02129278888">021 - 2927 - 8888</Link>
          </li>
          <li className="flex gap-2 animate-hover">
            <Image
              src="/assets/phone-call.png"
              alt="Hero"
              width={30}
              height={30}
              objectFit="contain"
              className="w-4 object-contain"
            />
            <Link href="tel:62215665262">6221 - 566 - 5262</Link>
          </li>
          <li className="flex gap-2 animate-hover">
            <Image
              src="/assets/fax.png"
              alt="Hero"
              width={30}
              height={30}
              objectFit="contain"
              className="w-4 object-contain"
            />
            <Link href="tel:62215671413">6221 - 567 - 1413</Link>
          </li>
          <li className="flex gap-2 animate-hover">
            <Image
              src="/assets/email.png"
              alt="Hero"
              width={30}
              height={30}
              objectFit="contain"
              className="w-4 object-contain"
            />
            <Link href="mailto:customercare@jne.co.id">
              customercare@jne.co.id
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative h-[500px] lg:h-[700px] w-full">
        <Image
          src="/assets/monas.svg"
          alt="Hero"
          layout="fill"
          objectFit="contain"
          className="object-cover"
        />
      </div>
    </div>
  );
}
