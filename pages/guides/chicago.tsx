import Head from "next/head";
import ChicagoGuide from "../../components/ChicagoGuide";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";

export default function APA() {
  return (
    <div>
      <Head>
        <title>Chicago Citation Format Guide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      <div className="mt-8">
        <ChicagoGuide />
      </div>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
