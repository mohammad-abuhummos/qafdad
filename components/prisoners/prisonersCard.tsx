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
interface PrisonersCardProps {
  title?: string;
  href: string;
  img?: string;
  name?:string,
  arrestDate?:string,
  dateOfBirth?:string,
  judgment?:string,
  city?:string,
  description?:string,
}

export default function PrisonersCard({
  title,
  href,
  img,
  name,
  arrestDate,
  dateOfBirth,
  judgment,
  city,
  description
  
}: PrisonersCardProps) {
  return (
    <div className="w-full h-full">
      <Link href={href}>
        <div className="bg-main-500/30 min-h-[249px] py-[29px] px-[16px] rounded-2xl shadow-xl">
          <div className="md:flex gap-4">
            <img src={img} className="w-full  md:max-w-[144px] max-h-[200px] rounded-2xl object-cover object-center" alt="" />
            <div className="mt-4">
              <h1 className="text-xl font-bold text-main-500">{name}</h1>
              <div>
                <p className="text-lg font-medium text-main-500 pt-4">البلد : {city} </p>
                <p className="text-lg font-medium text-main-500 pt-4">الحكم : {judgment} </p>
                <p className="text-lg font-medium text-main-500 pt-4">تاريخ الاعتقال : {arrestDate} </p>
                <p className="text-lg font-medium text-main-500 pt-4">تاريخ الميلاد : {dateOfBirth} </p>
              </div>
            </div>

          </div>
        </div>
      </Link>
      <div className="pt-4">
     
      </div>
    </div>
  );
}
