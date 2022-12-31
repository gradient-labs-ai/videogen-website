import Callout from "./Callout";

export default function APAGuide() {
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
          <h1>
            APA (American Psychological Association) citation format guide
          </h1>
          <p>
            APA citation format is a commonly used citation style in the social
            sciences, education, and other fields. It is important to properly
            cite sources in academic writing to give credit to the original
            creators of the information and to allow readers to locate the
            sources for themselves.
          </p>
          <Callout
            text="Free APA Citation Generator."
            cta="Try Now"
            url="/online-citation-generator"
          />
          <h2>In-text citations</h2>
          <p>
            When you use a quote or paraphrase from a source in your paper, you
            should include an in-text citation. The citation should include the
            author&apos;s last name and the year of publication, and it should
            be placed within the text of your paper. For example:{" "}
            <em>(Smith, 2020)</em>. If the source has two authors, include both
            names separated by an ampersand: <em>(Jones & Smith, 2018)</em>. If
            the source has three or more authors, use the first author&apos;s
            name followed by <em>et al.</em> <em>(Jones et al., 2016)</em>.
          </p>
          <h2>Reference list</h2>
          <p>
            At the end of your paper, you should include a reference list that
            provides full details about all the sources you have cited in your
            paper. The reference list should be alphabetized by the last name of
            the first author of each source.
          </p>
          <h2>Formatting</h2>
          <p>
            The reference list entries should be formatted according to the
            specific type of source being cited. Some common source types and
            their formatting are as follows:
          </p>
          <ul>
            <li>
              Books: Include the author&apos;s last name, first initial, year of
              publication, title of the book, place of publication, and
              publisher. For example:{" "}
              <em>
                Smith, J. (2020). The History of Time. New York, NY: Random
                House.
              </em>
            </li>
            <li>
              Journal articles: Include the author&apos;s last name, first
              initial, year of publication, title of the article, title of the
              journal, volume number, and page numbers. For example:{" "}
              <em>
                Jones, S. (2019). The Impact of Social Media on Society. Journal
                of Communication, 45(1), 35-50.
              </em>
            </li>
            <li>
              Websites: Include the author&apos;s last name, first initial, year
              of publication (if available), title of the webpage, URL, and the
              date you accessed the webpage. For example:{" "}
              <em>
                Smith, J. (2020). The Benefits of Meditation.
                https://www.healthline.com/health/benefits-of-meditation.
                Accessed December 20, 2020.
              </em>
            </li>
          </ul>
          <h2>Quotations</h2>
          <p>
            If you use a direct quote from a source, the quote should be placed
            in quotation marks and the page number should be included in the
            in-text citation. For example:{" "}
            <em>
              &ldquo;Meditation has been shown to reduce stress and improve
              overall well-being&ldquo; (Smith, 2020, p. 15)
            </em>
            .
          </p>
          <h2>Multiple works by the same author</h2>
          <p>
            If you are citing multiple works by the same author that were
            published in the same year, use a lowercase letter to distinguish
            between them in the in-text citation and the reference list. For
            example: <em>(Smith, 2020a)</em> and <em>(Smith, 2020b)</em>.
          </p>
          <p>
            By following these guidelines, you can properly cite your sources
            using APA citation format. It is important to be consistent and
            thorough in your citations to ensure the credibility and reliability
            of your work.
          </p>
        </div>
      </div>
    </div>
  );
}
