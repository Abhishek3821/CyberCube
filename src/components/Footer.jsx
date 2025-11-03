import React from "react";

// SVG icon components for better readability
const LogoIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="white" />
    <rect x="10" y="20" width="10" height="8" rx="2" fill="#0F172A" />
    <rect x="24" y="23" width="14" height="2" rx="1" fill="#0F172A" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.799 4.658-.566.155-1.165.18-1.758.06-2.199 1.844.15 3.582 3.434 3.615-1.88 1.474-4.248 2.355-6.821 2.355-.441 0-.877-.026-1.309-.077 2.429 1.562 5.32 2.476 8.434 2.476 9.941 0 15.399-8.246 15.399-15.398 0-.234-.005-.467-.015-.7a10.965 10.965 0 002.665-2.775z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.267,4,12,4,12,4S5.733,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.733,2,12,2,12s0,4.267,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.733,20,12,20,12,20s6.267,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.267,22,12,22,12S22,7.733,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
  </svg>
);

const footerLinksData = [
  {
    title: "Solutions",
    links: [
      "Insurance Brokers",
      "MGAs",
      "Insurers",
      "Reinsurance Brokers",
      "Reinsurers",
      "Insurance-Linked Securities",
      "Technology Partners",
    ],
  },
  {
    title: "About",
    links: ["About Us", "Careers", "Leadership", "Stay in touch"],
  },
  {
    title: "Support & Resources",
    links: [
      "Blog",
      "Research and Reports",
      "CyberCube News",
      "Existing User",
      "Security",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-12 lg:col-span-5">
            <div className="flex items-center space-x-4 mb-4">
              <LogoIcon />
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                CyberCube
              </span>
            </div>
            <p className="max-w-md">
              Delivering the world's leading cyber risk analytics to the
              insurance industry.
            </p>
          </div>

          {/* Links Section */}
          <div className="md:col-span-12 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinksData.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-teal-400 transition-colors duration-300 ease-in-out"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
                Social
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-teal-400 hover:scale-110 transform transition-transform duration-300"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-teal-400 hover:scale-110 transform transition-transform duration-300"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="text-gray-400 hover:text-teal-400 hover:scale-110 transform transition-transform duration-300"
                >
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} CyberCube. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-slate-500 hover:text-teal-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-teal-400 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
