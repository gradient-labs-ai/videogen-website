import Head from "next/head";
import VancouverGuide from "../../components/VancouverGuide";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";

export default function APA() {
  return (
    <div>
      <Head>
        <title>Vancouver Citation Format Guide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      <div className="mt-8">
        <VancouverGuide />
      </div>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
