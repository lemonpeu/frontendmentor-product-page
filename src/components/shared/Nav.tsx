import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = ["Collections", "Men", "Women", "About", "Contact"];

const imageStyle = {
    width: "auto"
}

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="p-2 mb-2 md:flex md:items-center">
      <div className="flex items-center md:flex-row-reverse">
        <button
          className="text-3xl cursor-pointer md:hidden mr-5"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
        <Link href="/">
          <Image 
            src="/images/logo.svg"
            width={150}
            height={100}
            alt="logo"
            />
        </Link>
      </div>
      <ul
        className={`md:flex md:items-center md:z-auto md:static absolute bg-white w-full left-0  md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${
          showMenu ? "top-[50px] opacity-100" : ""
        }`}
      >
        {navItems.map((item, key) => (
          <li className="mx-4 my-6 md:my-0" key={key}>
            <a className="bottom-2">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
