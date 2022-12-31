import Head from "next/head";
import CitationTool from "../components/CitationTool";
import DefaultContent from "../components/DefaultContent";
import DefaultCta from "../components/DefaultCta";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";

interface Props {
  heading?: string;
  subheading?: string;
}

const defaultProps = {
  heading: "Free Citation Generator",
  subheading: "Supported formats: APA, MLA, Chicago, Harvard, Vancouver",
};

export default function App(propsIn: Props) {
  let props = { ...defaultProps, ...propsIn };
  const { heading, subheading } = props;

  return (
    <div>
      <Head>
        <title>
          Citation Hero - FREE APA, MLA, Chicago, Harvard Citation Generator
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />

      <div className="min-h-screen pt-40 border-box">
        <div className="text-center">
          <h1 className="mt-2 text-2xl font-medium text-gray-900">{heading}</h1>
          <h2 className="mt-1 text-md text-gray-500">{subheading}</h2>
        </div>
        <div className="px-2 my-4">
          <CitationTool input="" />
        </div>
        <DefaultCta />
        <DefaultContent />
      </div>

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
