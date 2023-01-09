import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function AboutHero() {
  return (
    <div className="relative bg-gray-800">
      <div className="h-56 bg-main-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://gradientlabs.ai/images/gradientlabs-team.jpg"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-lg font-semibold text-gray-300">Gradient Labs</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Learn about our organization
          </p>
          <p className="mt-3 text-lg text-gray-300">
            VideoGen is developed and maintained by Gradient Labs, a
            company aimed at making AI technology more accessible.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="https://gradientlabs.ai/about"
                target="_blank"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                About Gradient Labs
                <ArrowTopRightOnSquareIcon
                  className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
