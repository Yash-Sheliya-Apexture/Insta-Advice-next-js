import React from "react";
import { FaTwitter, FaGithub, FaFacebook, FaDribbble, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-300">
      <div className="container mx-auto px-4">
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Contact Column */}
            <div>
              <div className="flex items-center mb-5 md:mb-8">
                <Image
                  src="/images/insta-logo.png"
                  alt="Insta Advice Logo"
                  width={48}
                  height={48}
                  className="pr-2 md:w-12"
                />
                <Link href="/" className="text-xl font-bold md:text-2xl">
                  Insta Advice
                </Link>
              </div>
              <p className="text-gray-500">We help you find tools that actually work, stop wasting money, and start getting results</p>

             {/* <ul className="space-y-2 mt-4">
                <li>
                  <p className="flex items-center gap-1 group relative">
                    <FaEnvelope className="mr-1 text-dark-color h-4 w-4"/>
                    <a href="mailto:info@instaadvice.com" className="text-gray-500 relative inline-block hover:text-gray-700 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-gray-900 before:transition-all before:duration-500 before:ease-in-out group-hover:before:w-full">
                      info@instaadvice.com
                    </a>
                  </p>
                </li>
                <li>
                 <p className="flex items-center gap-1 group relative">
                    <FaPhoneAlt className="mr-1 text-dark-color h-4 w-4"/>
                    <a href="tel:+15551234567" className="text-gray-500 relative inline-block hover:text-gray-700 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-gray-900 before:transition-all before:duration-500 before:ease-in-out group-hover:before:w-full">
                      +1 (555) 123-4567
                    </a>
                  </p>
                </li>
                <li>
                <p className="flex items-center gap-1 group relative">
                    <FaMapMarkerAlt className="mr-1 text-dark-color h-4 w-4"/>
                    <span className="text-gray-500 relative inline-block hover:text-gray-700 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-gray-900 before:transition-all before:duration-500 before:ease-in-out group-hover:before:w-full">
                      123 Main Street, Anytown, USA
                    </span>
                  </p>
                </li>
              </ul> */}
            </div>
            {/* General Column */}
            <div>
              <h4 className="font-semibold text-sm tracking-wider text-dark-color mb-4 uppercase">
                General
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-500">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-gray-500">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-gray-500">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/company" className="text-gray-500">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>

            {/* Comparisons Types Column */}
            <div>
              <h4 className="font-semibold text-sm tracking-wider text-dark-color mb-4 uppercase">
                Comparisons
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/comparison/ascendviral-vs-plixi" className="text-gray-500">
                    AscendViral vs Plixi
                  </Link>
                </li>
                <li>
                  <Link href="/comparison/ascendviral-vs-upleap" className="text-gray-500">
                    AscendViral vs Upleap
                  </Link>
                </li>
                <li>
                  <Link href="/comparison/ascendviral-vs-upgrow" className="text-gray-500">
                    AscendViral vs Upgrow
                  </Link>
                </li>
                <li>
                  <Link href="/comparison/upgrow-vs-upleap" className="text-gray-500">
                  Upgrow vs Upleap
                  </Link>
                </li>
                <li>
                  <Link href="/comparison/upgrow-vs-plixi" className="text-gray-500">
                  Upgrow vs Plixi
                  </Link>
                </li>
                <li>
                  <Link href="/comparison/upleap-vs-plixi" className="text-gray-500">
                  Upleap vs Plixi
                  </Link>
                </li>
                 <li>
                  <Link href="/comparison/path-social-vs-plixi" className="text-gray-500">
                  Path Social vs Plixi
                  </Link>
                </li>
                <li>
                  <Link href="/comparison/path-social-vs-kicksta" className="text-gray-500">
                  Path Social vs Kicksta
                  </Link>
                </li>
                <li>
                  <Link href="/comparison/ascendviral-vs-path-social" className="text-gray-500">
                  AscendViral vs Path social
                  </Link>
                </li>
              </ul>
            </div>
            {/* Social Media Column */}
            <div>
              <h4 className="font-semibold text-sm tracking-wider text-dark-color mb-4 uppercase">
                Social Media
              </h4>
              <p className="mb-4 text-gray-500">
                Follow us on social media to find out the latest updates on our
                progress.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-500">
                  <FaTwitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-500">
                  <FaGithub className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-500">
                  <FaFacebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-500">
                  <FaDribbble className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-gray-500">
          <div className="text-sm mb-2 md:mb-0">
            <p>© 2025 Insta Advice. All rights reserved.</p>
          </div>
          <div className="text-sm flex items-center gap-6 md:flex-row">
            <Link href="/terms-and-service" className="underline">Terms & Service</Link>
            <Link href="/privacy-policy" className="underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;