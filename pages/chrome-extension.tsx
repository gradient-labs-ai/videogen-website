import Head from "next/head";
import ExtensionHeader from "../components/ExtensionHeader";
import HomeCta from "../components/HomeCta";
import HomeFeatures from "../components/HomeFeatures";
import HomeLogos from "../components/HomeLogos";
import MainFooter from "../components/MainFooter";

export default function Aboout() {
  return (
    <div>
      <Head>
        <title>Citation Hero - Free Instant Citation Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ExtensionHeader />
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
