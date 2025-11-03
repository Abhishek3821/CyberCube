import React from "react";

// --- Main Component (inline helpers for fast refresh) ---
const Home_3 = () => {
  const LocktonLogo = (props) => (
    <svg
      height="40"
      viewBox="0 0 150 40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M20 0C8.95 0 0 8.95 0 20s8.95 20 20 20 20-8.95 20-20S31.05 0 20 0zm0 38c-9.94 0-18-8.06-18-18S10.06 2 20 2s18 8.06 18 18-8.06 18-18 18z" />
        <path d="M20 5c-8.28 0-15 6.72-15 15h30c0-8.28-6.72-15-15-15zm0 3c6.63 0 12 5.37 12 12H8c0-6.63 5.37-12 12-12z" />
        <text
          x="45"
          y="28"
          fontFamily="Arial, sans-serif"
          fontSize="20"
          fontWeight="bold"
        >
          LOCKTON
        </text>
      </g>
    </svg>
  );

  const UsiLogo = (props) => (
    <svg
      height="40"
      viewBox="0 0 100 40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="100" height="40" rx="5" fill="#003f87" />
      <text
        x="50"
        y="27"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        USI
      </text>
    </svg>
  );

  const WoodruffSawyerLogo = (props) => (
    <svg
      height="40"
      viewBox="0 0 250 40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#6a9f46">
        <path d="M0 5 L20 0 L40 5 L40 30 L20 40 L0 30 Z" />
        <text
          x="20"
          y="26"
          fontFamily="Arial, sans-serif"
          fontSize="20"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
        >
          WS
        </text>
      </g>
      <g fill="#6a9f46">
        <text
          x="50"
          y="18"
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fontWeight="bold"
        >
          WOODRUFF
        </text>
        <text
          x="50"
          y="36"
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fontWeight="bold"
        >
          SAWYER
        </text>
      </g>
    </svg>
  );

  const AvivaLogo = (props) => (
    <svg
      height="40"
      viewBox="0 0 120 40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0" y="0" width="20" height="25" fill="#00539f" />
      <rect x="22" y="0" width="10" height="25" fill="#84bd00" />
      <text
        x="0"
        y="38"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight="bold"
        fill="#00539f"
      >
        AVIVA
      </text>
    </svg>
  );

  const MunichReLogo = (props) => (
    <svg
      height="30"
      viewBox="0 0 150 30"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="0"
        y="22"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="bold"
        fill="#00539f"
      >
        Munich RE
      </text>
    </svg>
  );

  const PARTNER_LOGOS = [
    LocktonLogo,
    UsiLogo,
    WoodruffSawyerLogo,
    AvivaLogo,
    MunichReLogo,
  ];

  const LogoMarquee = ({ direction = "left" }) => {
    const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
    const trackClassName =
      direction === "right"
        ? "marquee-track marquee-track-rtl"
        : "marquee-track";
    return (
      <div className="relative w-full overflow-hidden marquee">
        <div className={trackClassName}>
          {logos.map((Logo, index) => (
            <div
              key={index}
              className="shrink-0 w-64 mx-8 flex items-center justify-center"
            >
              <Logo className="h-10 text-white hover:text-white transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="text-white min-h-screen">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-left 20s linear infinite;
        }
        .marquee-track-rtl { animation: marquee-right 20s linear infinite; }
        .marquee:hover .marquee-track { animation-play-state: paused; }
      `}</style>
      <main className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        {/* Top Section */}
        <section className="text-center mb-24 md:mb-32">
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight text-white">
            Partnering with leading institutions to power their growth
          </h1>
        </section>

        {/* Logo Marquee Section */}
        <section className="mb-10">
          <LogoMarquee />
        </section>

        <section className="mb-24 md:mb-40">
          <LogoMarquee direction="right" />
        </section>

        {/* Bottom Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          <div className="md:pr-8">
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
              Reshaping the boundaries of cyber risk quantification
            </h2>
          </div>
          <div className="space-y-6 text-white leading-relaxed text-lg">
            <p className="font-semibold text-white">
              We deliver the data, analytics, and expertise to empower cyber
              risk quantification and build resilience — so you can understand
              your cyber risk from all sides.
            </p>
            <p>
              Since CyberCube's founding, the insurance industry has relied on
              our solutions to inform cyber risk management and risk transfer
              decisions. Our technology leverages artificial intelligence (AI)
              and our multidisciplinary team, delivering confidence, clarity and
              cutting-edge expertise.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home_3;
