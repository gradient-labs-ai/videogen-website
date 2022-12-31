import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CitationTool from "../components/CitationTool";

export default function App() {
  const router = useRouter();
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput((input) => {
      const { q } = router.query;
      console.log(q);
      return q as string;
    });
  }, [router]);

  return (
    <div>
      <Head>
        <title>Citation Hero Extension</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen border-box">
        <div className="text-center py-2 bg-gray-50">
          <h2 className="inline-flex items-center text-md font-bold text-gray-800">
            <Image
              src="/logos/logo-green.svg"
              width="16"
              height="18"
              alt=""
              className="f-l"
            />
            &nbsp;&nbsp;Citation Hero
          </h2>
        </div>
        <div className="px-2">
          {input ? <CitationTool input={input} /> : ""}
        </div>
      </div>
    </div>
  );
}
