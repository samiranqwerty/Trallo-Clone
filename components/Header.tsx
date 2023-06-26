import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header>
      <Image
        src="https://res.cloudinary.com/studiovity/image/upload/v1687753565/Trello%20clone/Trello-logo-blue.svg_kkvxtf.png"
        alt="Trello Logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
      />

      {/* Search Box */}
      <form
        className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial"
        action=""
      >
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none"
        />
        <button hidden>Search</button>
      </form>
      {/* Avatar */}
    </header>
  );
};

export default Header;
