import Head from "next/head";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";
import MLAGuide from "../../components/MLAGuide";

export default function APA() {
  return (
    <div>
      <Head>
        <title>APA Citation Format Guide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      <div className="mt-8">
        <MLAGuide />
      </div>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
