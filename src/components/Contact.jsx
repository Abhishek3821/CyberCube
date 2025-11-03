const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const Contact = () => (
  <main className="mx-auto max-w-[90vw] h-screen p-2 sm:p-3 my-14">
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://www.cybcube.com/hubfs/crystal-cubes-on-abstract-geometry.mp4"
          type="video/mp4"
        />
      </video>

      {/* Blue Overlay/Tint */}
      <div className="absolute inset-0 bg-blue-800 opacity-70 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>

      {/* Content Container */}
      <div className="relative w-full h-full p-6 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-end md:flex-row md:justify-between md:items-end gap-8">
        {/* Main Text */}
        <h1 className="text-white font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-xl xl:max-w-3xl leading-none md:leading-tight">
          Ready to start a conversation?
        </h1>

        {/* Contact Button */}
        <button className="group bg-white text-gray-900 border border-gray-900 py-3 px-6 flex items-center space-x-4 self-start md:self-end hover:bg-gray-100 transition-colors duration-300 ease-in-out whitespace-nowrap">
          <span className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase">
            Contact Us
          </span>
          <ArrowIcon />
        </button>
      </div>
    </div>
  </main>
);

export default Contact;
