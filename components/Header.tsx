import { socialLinks } from "@/constants/socialLinks";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute left-0 top-0 z-50 w-full pt-10">
      <div className="container">
        <div className="flex-between">
          <Link
            href="/"
            className="text-2xl font-bold leading-none -tracking-[0.44px] text-primary-yellow"
          >
            G
            <span className="text-white">
              rifano
            </span>
          </Link>

          <ul className="mr-8 flex gap-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="no-focus block cursor-pointer rounded-lg p-2 transition-colors hover:bg-primary-darkBlue focus-visible:bg-primary-darkBlue"
                  href={link.href}
                  aria-label={`Follow to ${link.label}`}
                  target="_blank"
                >
                  <Image
                    src={link.iconUrl}
                    width="24"
                    height="24"
                    alt={link.label}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
