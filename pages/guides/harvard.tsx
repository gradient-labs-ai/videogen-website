import Head from "next/head";
import HarvardGuide from "../../components/HarvardGuide";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";

export default function APA() {
  return (
    <div>
      <Head>
        <title>Harvard Citation Format Guide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      <div className="mt-8">
        <HarvardGuide />
      </div>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
