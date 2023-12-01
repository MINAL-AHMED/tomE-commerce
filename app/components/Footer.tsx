"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-gray-900 text-white p-8 mt-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-grow mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
          <p>Subscribe to our newsletter for the latest updates.</p>
        </div>
        <div className="flex-grow mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <Link href="/"> Home</Link>
            </li>
            <li className="mb-2">
              <Link href="/Men">Men</Link>
            </li>
            <li className="mb-2">
              <Link href="/Women">Women</Link>
            </li>
            <li className="mb-2">
              <Link href="/Teens">Teens</Link>
            </li>
          </ul>
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Email: tom@gmail.com</p>
          <p>Phone: +1 123 456 7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
