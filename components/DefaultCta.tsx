import Link from "next/link";

export default function DefaultCta() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-main-600 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block">Want instant citations?</span>
                <span className="block">No sign up required!</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-main-200">
                Our free browser add-on is the most user friendly citation
                generator on the market!
              </p>
              <Link
                href="/chrome-extension"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-main-600 shadow hover:bg-main-50"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
            <img
              className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="/images/minidemo.jpg"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
