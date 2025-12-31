import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-500">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600">
            <svg
              className="h-8"
              viewBox="0 0 118 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-black">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a
                className="text-black transition hover:text-gray-700/75"
                href="#"
              >
                About
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Careers
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                History
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Services
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">Youtube</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19.615 7.318c-.217-.821-.857-1.461-1.678-1.678C16.34 5.333 12 5.333 12 5.333s-4.34 0-5.937.307c-.821.217-1.461.857-1.678 1.678C4.077 8.916 4.077 12 4.077 12s0 3.084.308 4.682c.217.821.857 1.461 1.678 1.678 1.597.307 5.937.307 5.937.307s4.34 0 5.937-.307c.821-.217 1.461-.857 1.678-1.678.308-1.598.308-4.682.308-4.682s0-3.084-.308-4.682zM9.917 14.575V9.425L14.583 12l-4.666 2.575z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm5.25.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75zm16.09 1.158-5.79 3.966a1.25 1.25 0 0 1-1.378 0L5.09 7.908a.75.75 0 0 0-.84 1.248l5.791 3.966a2.75 2.75 0 0 0 3.058 0l5.79-3.966a.75.75 0 1 0-.84-1.248z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">Dribbble</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                ></svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
