import Image from "next/image";

export default function HomeFeatures() {
  const webStoreLink =
    "https://chrome.google.com/webstore/detail/citation-hero/iojgjmcdmcekjmflcnmmcflcjmkmjmfi";
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-main-600">
                  <Image
                    src="/logos/logo-white.svg"
                    width="24"
                    height="24"
                    alt=""
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Generate Videos In Seconds
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  VideoGen is a free browser add-on that generates
                  formatted citations for websites, books, journal articles, and
                  more in various formats, including APA, MLA, Chicago, and
                  Harvard.
                </p>
                <div className="mt-6">
                  <a
                    href={webStoreLink}
                    className="inline-flex rounded-lg bg-main-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-main-600 hover:bg-main-700 hover:ring-main-700"
                  >
                    Generate Video - It&apos;s Free
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;VideoGen is a lifesaver... I used to spend
                    forever trying to properly format my citations–now it takes
                    seconds.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://socialhelix.io/dist/images/david.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      David Grossman, Student
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-max rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-fit lg:w-auto lg:max-w-none"
                src="/videos/demo.mp4"
                poster="/images/demo.jpg"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Add in seconds
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Getting started with VideoGen is quick and easy. Simply
                  visit the Chrome Web Store and add the extension to your
                  browser. Once installed, you can start using it right away.
                </p>
                <div className="mt-6">
                  <a
                    href={webStoreLink}
                    className="inline-flex rounded-lg bg-main-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-main-600 hover:bg-main-700 hover:ring-main-700"
                  >
                    Add to Chrome - It&apos;s Free
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://media.istockphoto.com/id/469066852/photo/diverse-mid-adult-students-using-computers-during-class-in-college.jpg?b=1&s=170667a&w=0&k=20&c=I55LaIslEBIiSid1TfgNB6o7AqB3WXUP_EOnu-7yywc="
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
