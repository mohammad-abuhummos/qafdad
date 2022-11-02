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

import Link from "next/link";

interface recentItmeProps {
  title: string;
  src: string;
  id: number;
  className?: String;
  action?: String;
}
export default function RecentItme({
  title,
  id,
  src,
  className,
  action=`/news/show?id=${id}`,
}: recentItmeProps) {
  return (
    <div className={`${className} `} key={id}>
         <Link href={`${action}`} className="mt-2 block">
        <a>
          
           
      <div className="w-full h-full relative ">
        <img
          src={src}
          alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
          className="object-cover object-center group-hover:opacity-75 h-full rounded-md min-h-[30vh]"
        />
        <div
          aria-hidden="true"
          className="bg-gradient-to-b from-transparent to-black opacity-75 absolute bottom-0 h-full w-full rounded-md"
        />
        <div className="flex items-end p-6 absolute bottom-0 ">
          <div>
            <h3 className="font-semibold text-xl text-white">
              <a href="#">
                <span className="absolute inset-0" />
                {title}
              </a>
            </h3>
          </div>
        </div>
          </div>
          </a>
                </Link>
    </div>
  );
}
