import Head from "next/head";
import HomeCta from "../../components/HomeCta";
import HomeFeatures from "../../components/HomeFeatures";
import HomeLogos from "../../components/HomeLogos";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";

export default function Kahoot1() {
  return (
    <div>
      <Head>
        <title>Citation Hero - Free Instant Citation Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      <div className="mt-8">
        <HomeFeatures />
        <HomeLogos />
        <HomeCta />
      </div>

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
