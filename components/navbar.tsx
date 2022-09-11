/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Logo } from "./Logo";
import Link from "next/link";
const user = {
  name: "Chelsea Hagon",
  email: "chelsea.hagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "الرئيسية ", href: "#", current: true },
  { name: "الأسرى ", href: "#", current: false },
  { name: "الأسيرات ", href: "#", current: false },
  { name: "مقالات", href: "#", current: false },
  { name: "أدبيات", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <div dir="rtl" className="min-h-[130px] shadow-lg">
        <div className="flex justify-around items-center w-full min-h-[130px] ">
          <Link href="/" className="">
            <a>
              <Logo className="h-10 w-auto" />
            </a>
          </Link>

          <div className="hidden flex-row gap-4 sm:flex">
            {navigation.map((item) => {
              return (
                <div className="basis-1" key={item.name}>
                  <Link href="/">
                    <a
                      className={
                        item.current
                          ? "font-bold text-main-500 text-2xl "
                          : " text-2xl"
                      }
                    >
                      {item.name}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="hidden sm:block">
            <div className="w-full">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full rounded-2xl border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
    </>
  );
}
