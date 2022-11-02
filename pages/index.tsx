import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import News from "../components/home/news";
import Recent from "../components/home/recent";
import Navbar from "../components/navbar";
import TitleWithAction from "../components/titleWithAction";
import { useEffect, useState } from "react";
import { getNews } from "../components/api/news";
import Footer from "../components/footer";
import HeaderLoadingCard from "../components/loading/home/headerLoading";
import RecentPrisoners from "../components/home/recent_prisoners";
import { getFirtsMale } from "../components/api/male";
import Link from "next/link";

const Home: NextPage = () => {
  const [news, setNews] = useState<any[]>([]);
  const [pre, setPre] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getNewsList();
    getMaleListData();
  }, []);

  const getNewsList = async () => {
    try {
      const data = await getNews();
      setNews(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const getMaleListData = async () => {
    try {
      const data:any = await getFirtsMale();
      console.log(data);
      setPre(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>الصفحة الرئسية</title>
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

      <main className="min-h-[90vh]">
        <Navbar />
        <div className="pt-20 px-7 md:px-[10%]">
          {isLoading && <HeaderLoadingCard />}
          <div className="w-full flex justify-between items-center">
      <Link href="/male_prisoners">
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
          قراءة المزيد 
        </a>
      </Link>
      <div>
        <h1 className="font-bold text-4xl text-main-500">الأسرى</h1>{" "}
      </div>
    </div>
          <div className="mb-20">
            {!!pre && pre.length > 0 &&
            
            <>
            <RecentPrisoners news={pre} />
              </>
            }
          </div>
          <TitleWithAction title="الأحدث" actionName="قراءة المزيد " />
          <div>
            {news.length > 0 &&
            
              <>
            <Recent news={news.slice(0, 5)} />
              </>
            }
          </div>
        </div>
        {news.slice(5, news.length - 1 < 6 ? news.length - 1 : 6).length >
          0 && (
          <div className="pt-20 mt-10 px-7 md:px-[10%]">
            <TitleWithAction title="الأخبار" actionName="قراءة المزيد " />
            <div>
              <News
                news={news.slice(5, news.length - 1 < 6 ? news.length - 1 : 6)}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
