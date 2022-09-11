import Link from "next/link";

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
interface titleWithActionProps {
  title: string;
  actionName: string;
}

export default function TitleWithAction({
  title,
  actionName,
}: titleWithActionProps) {
  return (
    <div className="w-full flex justify-between items-center">
      <Link href="/">
        <a className="font-semibold text-xl text-main-500 flex items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          {actionName}
        </a>
      </Link>
      <div>
        <h1 className="font-bold text-4xl text-main-500">{title}</h1>{" "}
      </div>
    </div>
  );
}
