"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md h-[70px] border-b border-black">
      <div className="w-full h-full mx-auto flex items-center justify-between px-6">
        {/* Left Section */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="/explore"
            className={twMerge(
              "bg-blue-400 text-black px-5 ring-black ring-2 py-3 rounded-2xl text-[15px] font-bold hover:opacity-90",
              pathname === "/explore" && "ring-2 bg-blue-300 font-semibold"
            )}
          >
            Explore
          </Link>
          <Link
            href="/media"
            className={twMerge(
              "text-black hover:underline underline-offset-4 px-3 py-2 rounded-md text-[17px] font-medium",
              pathname === "/media" &&
                "font-semibold underline underline-offset-4"
            )}
          >
            Media
          </Link>
        </div>

        {/* Middle Section */}
        <div className="flex items-center justify-center">
          <Link href="/" className="text-2xl font-bold text-black">
            <Image
              src="/raceforwater.png"
              alt="RaceForWater"
              width={100}
              height={75}
            />
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/about"
            className={twMerge(
              "text-black hover:underline underline-offset-4 px-3 py-2 rounded-md text-[17px] font-medium",
              pathname === "/about" &&
                "font-semibold underline underline-offset-4"
            )}
          >
            About
          </Link>
          <a
            href="https://github.com/Yazi27/raceforwater"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-black">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link
              href="/explore"
              className={twMerge(
                "text-black hover:underline px-3 py-2 rounded-md text-[17px] font-medium",
                pathname === "/explore" && "font-semibold bg-gray-200"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              href="/media"
              className={twMerge(
                "text-black hover:underline px-3 py-2 rounded-md text-[17px] font-medium",
                pathname === "/media" && "font-semibold bg-gray-200"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Media
            </Link>
            <Link
              href="/about"
              className={twMerge(
                "text-black hover:underline px-3 py-2 rounded-md text-[17px] font-medium",
                pathname === "/about" && "font-semibold bg-gray-200"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="https://github.com/Yazi27/raceforwater"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500 px-3 py-2 rounded-md text-[17px] font-medium flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaGithub className="text-2xl mr-2" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
