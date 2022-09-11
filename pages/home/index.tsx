import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Navbar from "../../components/navbar";
import TitleWithAction from "../../components/titleWithAction";
import Recent from "../../components/home/recent";
import News from "../../components/home/news";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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

      <main>
        <Navbar />
        <div className="pt-20 px-7 md:px-[10%]">
          <TitleWithAction title="الأحدث" actionName="قراءة المزيد " />
          <div className="">
            <Recent />
          </div>
        </div>
        <div className="pt-20 px-7 md:px-[10%]">
          <TitleWithAction title="الأخبار" actionName="قراءة المزيد " />
          <div className="">
            <News />
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
