import Link from "next/link";

export default function Callout(props: {
  text: string;
  url: string;
  cta: string;
}) {
  return (
    <div className="bg-main-50 rounded-xl">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-12 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">{props.text}</span>
          <span className="block text-main-600">No sign up required.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href={props.url}
              className="inline-flex no-underline items-center justify-center rounded-md border border-transparent bg-main-600 px-5 py-3 text-base font-medium text-white hover:bg-main-700"
            >
              {props.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
