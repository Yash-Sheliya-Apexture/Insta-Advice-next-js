import React from "react";
import { FaTwitter, FaGithub, FaFacebook, FaDribbble } from "react-icons/fa";
import Image from "next/image"; // Use Next.js Image component for optimized images
import Link from "next/link"; // Use Next.js Link component for internal links

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-300">
      <div className="container mx-auto px-4">
        {/* Footer Content Columns */}
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Column */}
            <div>
              <div className="flex items-center mb-5 md:mb-8">
                <Image
                  src="/images/insta-logo.png" // Images should be in the public folder
                  alt="Insta Advice Logo"
                  width={48} // Width in pixels
                  height={48} // Height in pixels
                  className="pr-2 md:w-12"
                />
                <Link href="/" className="text-xl font-bold md:text-2xl">
                  Insta Advice
                </Link>
              </div>
              <p className="text-gray-500">We help you find tools that actually work, stop wasting money, and start getting results</p>

              <ul className="space-y-2 mt-4">
                <li>
                  <p>
                    <strong className="font-semibold mr-1 text-dark-color">Email:</strong>
                    <a href="mailto:info@instaadvice.com" className="text-gray-500">
                      info@instaadvice.com
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="font-semibold mr-1 text-dark-color">Phone:</strong>
                    <a href="tel:+15551234567" className="text-gray-500">
                      +1 (555) 123-4567
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="font-semibold mr-1 text-dark-color">Address:</strong>
                    <span className="text-gray-500">
                      123 Main Street, Anytown, USA
                    </span>
                  </p>
                </li>
              </ul>
            </div>
            {/* General Column */}
            <div>
              <h4 className="font-semibold text-sm tracking-wider text-dark-color mb-4 uppercase">
                General
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/post" className="text-gray-500">
                    blogs
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



            {/* Hosting Types Column */}
            <div>
              <h4 className="font-semibold text-sm tracking-wider text-dark-color mb-4 uppercase">
                Comparisons
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-500">
                    AscendViral vs Plixi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500">
                    AscendViral vs Upleap
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500">
                    AscendViral vs Upgrow
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500">
                    AscendViral vs Path social
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500">
                    Upgrow vs Upleap
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500">
                    Upgrow vs Plixi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500">
                    Upleap vs plixi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500">
                    Plixi vs Path social
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500">
                    Kicksta vs Path social
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

        {/* Separator */}
        <hr className="my-6 border-gray-300" />

        {/* Bottom Row - Copyright & Terms */}
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
