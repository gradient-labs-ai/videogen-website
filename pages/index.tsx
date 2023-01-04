import Head from "next/head";
import CreateVideo from "../components/FeaturedTemplates";
import HomeCta from "../components/HomeCta";
import HomeFeatures from "../components/HomeFeatures";
import HomeHero from "../components/HomeHero";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";

export default function Home() {
  return (
    <div>
      <Head>
        <title>VideoGen - AI Video Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      <div className="mt-8">
        <HomeHero />
        <HomeFeatures />
        <CreateVideo />
        <HomeCta />
      </div>

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
