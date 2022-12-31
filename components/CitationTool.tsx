import { XCircleIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import ClipboardJS from "clipboard";
import Link from "next/link";
import { useEffect, useState } from "react";

const citationNames: string[] = [
  "APA",
  "Harvard",
  "Nature",
  "MLA",
  "Chicago",
  "Vancouver",
];

interface Citation {
  style_shortname: string;
  citation: string;
  style_longname: string;
}

export default function CitationTool(props: { input: string }) {
  const [copiedAlert, setCopiedAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [citations, setCitations] = useState<Citation[]>([]);
  const [input, setInput] = useState(props?.input);
  const [loading, setLoading] = useState(false);

  if (typeof window !== "undefined") {
    let clipboard = new ClipboardJS(".click-to-copy");
  }

  useEffect(() => {
    if (props?.input && props?.input.length > 0) {
      setLoading(true);
      fetchCitations();
    }
  }, []);

  useEffect(() => {
    if (copiedAlert) {
      setTimeout(() => {
        setCopiedAlert(false);
      }, 2000);
    }
  }, [copiedAlert]);

  // Fetches citations for url
  async function fetchCitations(): Promise<void> {
    try {
      const res = await axios.get(`https://api.citeas.org/product/${input}`);
      console.log(res);
      const citations = res.data.citations;
      if (citations[0]?.citation?.includes("Citation Machine")) {
        setErrorAlert(true);
        setLoading(false);
      } else {
        setCitations(citations);
        setLoading(false);
      }
    } catch (e) {
      setErrorAlert(true);
      setLoading(false);
      console.log(e);
    }
  }

  return (
    <div className="mx-auto max-w-md sm:max-w-3xl">
      <div>
        <label className="block mt-2 clear-both text-sm font-medium text-gray-700">
          Cite websites, journals, and books:
        </label>
        <div className="mt-1 sm:flex sm:items-center">
          <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="block w-full rounded-md border-gray-300 focus:border-main-500 focus:ring-main-500 sm:text-sm"
              placeholder="URL, Title, arXiv ID, DOI or Related Query"
            />
          </div>
          <div className="mt-2 sm:mt-0 sm:ml-2 sm:flex-shrink-0">
            <button
              onClick={() => {
                fetchCitations();
                setLoading(true);
                setErrorAlert(false);
              }}
              className={`flex items-center justify-center w-full rounded-md border border-transparent bg-main-600 px-4 py-2 text-center text-sm font-medium ${
                loading ? "text-main-600" : "text-white"
              } shadow-sm hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-main-500 focus:ring-offset-2`}
            >
              <svg
                className={`absolute animate-spin h-5 w-5 text-white ml-auto ${
                  loading ? "" : "hidden"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Generate Citations
            </button>
          </div>
        </div>
      </div>
      <div className="my-2">
        {copiedAlert ? (
          <div className="fixed top-20 w-screen max-w-md sm:max-w-3xl rounded-md bg-green-50 p-4 shadow-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircleIcon
                  className="h-5 w-5 text-green-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  Copied text
                </p>
              </div>
              <div className="ml-auto pl-3">
                <div className="-mx-1.5 -my-1.5">
                  <button
                    type="button"
                    className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                  >
                    <span className="sr-only">Dismiss</span>
                    <XMarkIcon
                      onClick={() => setCopiedAlert(false)}
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {errorAlert ? (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <XCircleIcon
                  className="h-5 w-5 text-red-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Error loading citations. Try these fixes:
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <ul role="list" className="list-disc space-y-1 pl-5">
                    <li>Check for typos.</li>
                    <li>Make sure you didn&apos;t leave the form blank.</li>
                    <li>
                      Try using a different method (URL, Article Title, DOI,
                      etc.).
                    </li>
                    <li>Remove any unicode, emojis or special characters.</li>
                    <li>Reload this website and try again.</li>
                    <li>
                      <Link href="/support" className="underline">
                        Contact support
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <ul role="list" className="cursor-pointer	divide-y divide-gray-200">
          {citations.length > 0 ? (
            citations?.map((citation: Citation, index: number) => {
              const formattedCitation = citation?.citation
                .replace(/<i>|<\/i>|<|>/g, "")
                .replace("...", ".");

              return citation?.style_shortname === "nature" ? (
                ""
              ) : (
                <li key={citation?.style_shortname}>
                  <a
                    onClick={() => setCopiedAlert(true)}
                    data-clipboard-text={formattedCitation}
                    className="click-to-copy rounded-md block hover:bg-gray-50 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                  >
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="w-full text-sm font-medium text-main-600">
                          {citationNames[index]}
                        </p>
                      </div>
                      <p className="w-full break-words text-sm text-gray-900">
                        {formattedCitation}
                      </p>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <DocumentDuplicateIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <p>Click to copy</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })
          ) : (
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              <p></p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
