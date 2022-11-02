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
import RecentItme from "./recentItem";

const data = [
  {
    title: "بعد 172 يوما من الإضراب العواودة ينتصر في معركة الأمعاء الخاوية",
    src: "https://s3-alpha-sig.figma.com/img/72a2/fcef/f8852afb6ff763f13719d8799bfc2429?Expires=1663545600&Signature=H-~oDyEeBxjRFmuUkub6aakuO0VrAQb7Pse9Yxe~9oOIQoPpMr2K2fvL6kT-ZQSOaRvpIj04NAp10D6UVykCmgRlF4gXHjeLPy8yCbuWqhCWKWrVN933z9FwoTywgKhhuQzpdxz-12enVxw4uyno-XMcj5bXj4RmvCNtirAxuICYoF6w8rSW-Pc0kewJZ5HcznzeP-uaKhdruHniuzkSWL6G4oA25ZIMADS5ncjnXCu4N36b3NFs1U6UKsJndOzzgpVeY5z5R2srz3RbjZ64k7G4RwkvtTnXmo5xWm2Dz7CjbIAwTLQ5L~T9PZMOyxeD~UP1-65WMZ6IxnIFiRuMGQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    className: "md:row-span-2 md:col-span-2",
    id: 1,
  },
  {
    title: "لماذا أسقط العرب ملف أسرى فلسطين من حساباتهم؟",
    src: "https://s3-alpha-sig.figma.com/img/2948/a0df/f1daff4464c5cced08ce8cbf6a0d1c15?Expires=1663545600&Signature=R~LSTdGJNxNU3CnJqpLGFC481s6SoHHyibzS31BFgPIpRV8pTNTlw29msjNxxVgkcwokiUVUBBTspSvLM4gUlUYEBwLE9mSkKDyZT584FoIZB3I6gkzwCgQdY5RZ5Tnm2j6fVS2-yeWfZ48APDXSm1pCqtb3NKLpaYGafio~bQjpa~4Mn4J44X4n8l1fYSB7eruM3heMzceHX1XSupzAcTvB0eDL1C~fRdnUBND-2I5ewIwM9OLLUcGXQ5KoqOM-A6zzap7x6jXI3U-3VtQu0bcnXB1ZkYjMjGQiSZ6qgTWNA6IxCyNzcPbcTAAPgK~LJl~GnJgDu0f5GW7HS7-mrA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    className: "#",
    id: 2,
  },
  {
    title: "الاحتلال يعتقل 7 مواطنين من الضفة المحتلة",
    src: "https://s3-alpha-sig.figma.com/img/3fb8/6370/de1f058b19e6de9f404a8a09473a64cc?Expires=1663545600&Signature=h1TAU9CDCSOJoWpETbUwhlV5vzG25bx7kIjlGl6fgCjLmJCTNqOGKsf5IR0-nqiLLMvJxKoBX8FFbyg~-RZDfvmY8~1zRBPpYXPWCBFs5TOT0bO58iS-2qEIaU3gdNTmc4km46PChsawUPrcoNlJUdOWgU67KtHE083sl4~SAHp3LAaSJPa3~FRiHntgMQZNpjejvEpR32ZCOyje~gqqnOBRBK-6y05oPrY5oY-U-PZVw9TLLnOIINH~Vg8EXxdFozL1hspqj8erbIIhszVXHTA1fXo3nI4nu5eBsuHBAQlqrI1mBnkY3EvxrmVafIs~iH0naW4Spt66uTxa6rMdPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    className: "",
    id: 3,
  },
  {
    title: "القدرة يهيب بأحرار شعبنا وأمتنا بنصرة واسناد الأسرى في معركتهم",
    src: "https://s3-alpha-sig.figma.com/img/896f/6195/31395e6d91e0d05da065e8e6cdaf9bd0?Expires=1663545600&Signature=DiadOwTdTiS3Rtgy7LNYQFCHL~1fBFDwg9LfOpfaFUf58Kt88Cz3m4WnTit5PyP5wMxGyPeyOfs8y9kvUZ4yl4W8IhT9PgwuCXu7cqieog1p~sHPK6Ah5NV11PUV7E5XVphpq50aUqxswlBVniU5pvxgjPQqeYI0uYLQDaARV9lbZ0WnYTf-zE95LVQ2UMaE~jz621FbfTwoUVVURvxplzJbYqJVP-glxolr94BfAQQVVlIlZQLCGuXASwiYbyfKXJ19F5soFzaMj5kYKUyG0OhM2a6pvNC9RJiT8LHoYLOkT4b~YVXtSm2f7bZiPymUjjvfPwYr3E3ELD3WfjjaKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    className: "#",
    id: 4,
  },
  {
    title: "مع بدء إضراب الأسرى.. ما هو المطلوب من الشارع الفلسطيني؟",
    src: "https://s3-alpha-sig.figma.com/img/537d/c002/6b22027f6085496f4571caa204341ec8?Expires=1663545600&Signature=f537L2fb~33KOFq0XD-76HsulPjj-EB3eXThnDg-vToUIwpRV-Mm3dcwnvXUAaKh2unXns6dF2cJeLdg2iCdumVJ3P-~ytjzmL92yViv8Ot-BXkEfatFUeiLHarqY9A7Nt7PGDxRLUyZ80qit0c2yZ~i4UQXp589kQeo8kQ7xrdf~pvo6N6Cobh8n2I3qvHhfVK-4JOS9diOoW9DUn2QG~6M4JSg8Z2oYEOzf86h-17u8Jy~HjM6J8b9-pHuWcwJAysLU9T6ZhlE8v7LvJDUswsZlsTJCjgmWYB-SnTx2-QspS8txydijKyAnTcN5b7H0sH2lnvpcq9CSOKWPJ9iUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    className: "",
    id: 5,
  },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
interface recentProps {
  news: any[]
}

export default function RecentPrisoners({news}:recentProps) {

  return (
    <>
      <div className="">
        <div
          dir="rtl"
          className="dir mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-4 sm:grid-rows-2 sm:gap-x-6 lg:gap-8"
        >
          {news.map((data,index) => {
            return (
              <RecentItme
                action={`/male_prisoners/show?id=${data.id}`}
                key={data.id}
                id={data.id}
                src={data.img}
                title={data.name}
                className={index == 0 ?"md:row-span-2 md:col-span-2":""}
                />
            );
          })}
        </div>
      </div>
    </>
  );
}
