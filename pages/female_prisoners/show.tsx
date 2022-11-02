import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { getSingleFemale } from "../../components/api/female";
import Footer from "../../components/footer";


const Show: NextPage = () => {
  const [post, setPost] = useState<any>(null);
  const router = useRouter();
  useEffect(() => {
    getPost();
  }, []);
  const getPost = async () => {
    const { id } = router.query;
    try {
      const data = await getSingleFemale(id);
      setPost(data);
    } catch (error) {}
  };

  return (
    <div>
      <Head>
        <title>الأسيرات | {!!post && post.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main dir="rtl" className="min-h-[90vh]">
        <Navbar />
        {!!post && (
          <div className="pt-20 px-7 md:px-[10%]" dir="rtl">

<div className="md:flex">
              <img src={post.img} className="h-[70vh] object-cover object-center w-full md:w-[30vw] rounded-2xl mt-10" />
              
              <table className="table-auto md:m-10 mt-10 bg-main-500/20 w-full rounded-2xl">
         
              <tbody className="m-10 border-b">
                <tr className="border-b border-main-500">
                  <td className="p-4"><h4 className="text-2xl font-semibold text-main-900" >الاسم:</h4>  </td>
                  <td className="p-4"><h2 className="text-xl font-semibold text-main-500/75 text-center">{post.name}</h2></td>
                </tr>
                <tr className="border-b border-main-500" >
                  <td className="p-4"><h4 className="text-2xl font-semibold text-main-900"> البلد: </h4></td>
                  <td className="p-4"><h2 className="text-xl font-semibold text-main-500/75 text-center">{post.city} </h2></td>
                </tr>
                <tr className="border-b border-main-500">
                  <td className="p-4"><h4 className="text-2xl font-semibold text-main-900">تاريخ الميلاد: </h4></td>
                  <td className="p-4"><h2 className="text-xl font-semibold text-main-500/75 text-center">{post.dateOfBirth}</h2></td>
                </tr>
                <tr className="border-b border-main-500">
                  <td className="p-4"><h4 className="text-2xl font-semibold text-main-900">  تاريخ الاعتقال: </h4></td>
                  <td className="p-4"><h2 className="text-xl font-semibold text-main-500/75 text-center"> {post.arrestDate} </h2></td>
                </tr>
                <tr>
                  <td className="p-4"><h4 className="text-2xl font-semibold text-main-900"> الحكم: </h4></td>
                  <td className="p-4"><h2 className="text-xl font-semibold text-main-500/75 text-center">{post.judgment}</h2></td>
                </tr>
              </tbody>
            </table>
              
              </div>
            <h1 className="text-main-500 text-4xl font-bold pt-10">
              {" "}
              {!!post && post.title}
            </h1>
            <div>
            
            
              <p className="text-3xl font-semibold pt-16 ">
                {" "}
                {post.description}
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Show;
