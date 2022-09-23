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
import { useRouter } from "next/router";
const user = {
  name: "Chelsea Hagon",
  email: "chelsea.hagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter()
  const currentPath = router.asPath
  console.log(router.asPath);
  const navigation = [
    { name: "الرئيسية ", href: "/", current: currentPath == "/" },
    { name: "الأسرى ", href: "/male_prisoners", current: currentPath == "/male_prisoners" },
    { name: "الأسيرات ", href: "/female_prisoners", current: currentPath == "/female_prisoners"  },
    { name: "مقالات", href: "/articles", current: currentPath == "/articles"  },
 
  ];

  return (
    <>
      <div dir="rtl" className="min-h-[130px] shadow-lg">
        <div className="flex justify-around items-center w-full min-h-[130px] ">
          <Link href="/" className="">
            <a>
            <Image src="/assets/logo.png" width="100" height="100" />
            </a>
          </Link>

          <div className="hidden flex-row gap-4 sm:flex">
            {navigation.map((item) => {
              return (
                <div className="basis-1" key={item.name}>
                  <Link href={item.href}>
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
        
        </div>
      </div>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
    </>
  );
}
