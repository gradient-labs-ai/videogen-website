import Head from "next/head";
import APAGuide from "../../components/APAGuide";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";

export default function APA() {
  return (
    <div>
      <Head>
        <title>APA Citation Format Guide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      <div className="mt-8">
        <APAGuide />
      </div>

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
