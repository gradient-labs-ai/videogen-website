import Head from "next/head";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import AboutHero from "../components/AboutHero";

export default function About() {
  return (
    <div>
      <Head>
        <title>VideoGen - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      <div className="mx-auto mt-20">
        <AboutHero />
      </div>

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
