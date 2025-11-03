import React, { useRef, useLayoutEffect } from "react";
import { assets } from "../assets/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TeamMemberCard = React.forwardRef(
  ({ image, name, title, isMobile }, ref) => (
    <div
      ref={ref}
      className="team-member-card relative w-full sm:w-72 md:w-80 lg:w-84 h-[22rem] rounded-lg overflow-hidden group shadow-lg mx-auto"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-opacity duration-200"
      />
      {/* Show info always on mobile, hover on desktop */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-white/90 p-4 sm:p-6 transition-transform duration-300 shadow-md 
        ${
          isMobile
            ? "translate-y-0"
            : "translate-y-34 group-hover:translate-y-0"
        }`}
      >
        <p className="text-lg sm:text-xl md:text-2xl text-black font-semibold">
          {name}
        </p>
        <p className="text-gray-600 text-sm sm:text-md mt-1 sm:mt-2">{title}</p>
      </div>
    </div>
  )
);

export default function CyberRisk() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  const members = [
    {
      image: assets.news1,
      name: "OUR IMPACT 01",
      title: "Unlock capital for cyber risk to drive innovation",
    },
    {
      image: assets.news2,
      name: "OUR IMPACT 02",
      title: "Translate cyber risk into financial impact for organizations",
    },
    {
      image: assets.news3,
      name: "OUR IMPACT 03",
      title: "Enable societal resilience to systemic risk",
    },
    {
      image: assets.news4,
      name: "OUR IMPACT 04",
      title: "Advance data-driven decisions for a safer digital economy",
    },
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsRef.current;
    if (!cardsContainer || !section) return;

    const cardEls = Array.from(
      cardsContainer.querySelectorAll(".team-member-card")
    );

    const mm = gsap.matchMedia();

    // Desktop only
    mm.add("(min-width: 768px)", () => {
      const st = ScrollTrigger.create({
        id: "teamPin",
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: true,
        anticipatePin: 1,
        scrub: false,
        markers: false,
      });

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const offLeft = -vw * 0.9;
      const offRight = vw * 0.9;
      const offBottom = vh * 0.6;

      gsap.set(cardEls, {
        x: (i) => (i % 2 === 0 ? offLeft : offRight),
        y: offBottom,
        opacity: 1,
        willChange: "transform",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: () => st.start + window.innerHeight * 1.25,
          scrub: true,
        },
      });

      tl.to(cardEls, { x: 0, y: 0, stagger: 0, ease: "none" }, 0);

      return () => {
        st.kill();
        tl.scrollTrigger?.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, [members.length]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      ref={sectionRef}
      className="min-h-screen text-white py-10 relative overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 mt-10 leading-snug">
          Improving the resilience of organizations and society with our cyber
          analytics
        </h1>
        <div
          ref={cardsRef}
          className="flex flex-col md:flex-row gap-4 justify-center relative"
        >
          {members.map((m, idx) => (
            <TeamMemberCard key={idx} {...m} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </div>
  );
}
