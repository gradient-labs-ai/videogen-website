import { useEffect, useState } from "react";
import featuredTemplatesList from "./featuredTemplatesList";

export default function FeaturedTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState(undefined);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="relative py-16 lg:py-24 bg-white">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-2xl font-bold leading-6 text-gray-900">VideoGen</h3>
        <div className="border-t border-gray-200">
          <ul
            id="select-template"
            className="grid grid-cols-3 gap-x-4 gap-y-8 py-5 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8"
          >
            {featuredTemplatesList.map((template) => (
              <li
                onClick={() => setSelectedTemplate(template)}
                key={template?.key}
                className="relative rounded-lg hover:opacity-75"
              >
                <div className="group aspect-w-9 aspect-h-16 block w-full overflow-hidden rounded-lg bg-gray-100">
                  <div className="h-full w-full">
                    <img
                      src={template?.gif}
                      alt=""
                      className="pointer-events-none h-full object-cover"
                    />
                    <div className="absolute top-1 right-1">
                      {
                        // Badges
                        template?.pro ? (
                          <span className="float-right rounded-full bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800">
                            Pro
                          </span>
                        ) : (
                          <span className="float-right rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                            Free
                          </span>
                        )
                      }
                    </div>
                  </div>
                  <a
                    href="https://app.videogen.io"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      Select template {template?.title}
                    </span>
                  </a>
                </div>
                <p className="text-lg pointer-events-none mt-2 truncate text-center font-medium text-gray-900">
                  {template?.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
