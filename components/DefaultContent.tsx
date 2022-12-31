import Link from "next/link";

export default function DefaultContent() {
  return (
    <div className="relative overflow-hidden bg-gray-50 py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          <h3>What is MLA Format?</h3>
          <p>
            MLA (Modern Language Association) citation format is commonly used
            in the humanities and liberal arts. In MLA style, you use in-text
            citations to give credit to the sources you have used in your
            research. These citations include the author&apos;s last name and
            the page number of the source material. In the list of works cited
            at the end of your paper, you should include full citations for all
            of the sources you have used, including the author&apos;s name,
            title of the work, publication information, and the medium of
            publication (such as print or web). It is important to follow the
            guidelines of the MLA citation format to ensure that your paper is
            properly formatted and that you are giving credit to the sources you
            have used.
          </p>
          <Link
            href="/guides/mla"
            className="text-blue-600 no-underline hover:underline"
          >
            MLA Citation Guide
          </Link>
          <h3>What is APA Format?</h3>
          <p>
            APA (American Psychological Association) citation format is commonly
            used in the social sciences and education. In APA style, you also
            use in-text citations to give credit to the sources you have used in
            your research. The reference list at the end of the paper is called
            a &quot;References&quot; list and includes full citations for all of
            the sources you have used, with additional information such as the
            volume and issue number of a journal article. It is important to
            follow the guidelines of the APA citation format to ensure that your
            paper is properly formatted and that you are giving credit to the
            sources you have used.
          </p>
          <Link
            href="/guides/apa"
            className="text-blue-600 no-underline hover:underline"
          >
            APA Citation Guide
          </Link>
          <h3>What is Harvard Style?</h3>
          <p>
            Harvard citation style is a widely used style in the UK and other
            parts of the world. In Harvard style, you use in-text citations and
            a reference list to give credit to the sources you have used in your
            research. The citations include the author&apos;s last name and the
            year of publication only. It is important to follow the guidelines
            of the Harvard citation format to ensure that your paper is properly
            formatted and that you are giving credit to the sources you have
            used.
          </p>
          <Link
            href="/guides/harvard"
            className="text-blue-600 no-underline hover:underline"
          >
            Harvard Citation Guide
          </Link>
          <h3>What is Chicago Style?</h3>
          <p>
            Chicago citation style is commonly used in the humanities and social
            sciences. In Chicago style, you use footnotes or endnotes to give
            credit to sources, and a bibliography at the end of the paper. The
            footnotes or endnotes include full citations for the sources, while
            the bibliography includes a list of all of the sources you have used
            in your research. It is important to follow the guidelines of the
            Chicago citation format to ensure that your paper is properly
            formatted and that you are giving credit to the sources you have
            used.
          </p>
          <Link
            href="/guides/chicago"
            className="text-blue-600 no-underline hover:underline"
          >
            Chicago Citation Guide
          </Link>
          <h3>What is Vancouver Style?</h3>
          <p>
            Vancouver citation style is commonly used in the field of medicine.
            In Vancouver style, you use numerical citations within the text to
            give credit to the sources you have used in your research, and a
            reference list at the end of the paper. The reference list includes
            full citations for all of the sources you have used, with the
            sources numbered in the order that they are cited in the text. It is
            important to follow the guidelines of the Vancouver citation format
            to ensure that your paper is properly formatted and that you are
            giving credit to the sources you have used.
          </p>
          <Link
            href="/guides/vancouver"
            className="text-blue-600 no-underline hover:underline"
          >
            Vancouver Citation Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
