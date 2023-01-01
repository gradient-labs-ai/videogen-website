import Head from "next/head";
import HomeCta from "../components/HomeCta";
import HomeFeatures from "../components/HomeFeatures";
import HomeHero from "../components/HomeHero";
import HomeLogos from "../components/HomeLogos";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";

export default function Home() {
  return (
    <div>
      <Head>
        <title>VideoGen - Free Instant Citation Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      <div className="mt-8">
        <HomeHero />
        <HomeFeatures />
        <HomeCta />
      </div>

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
