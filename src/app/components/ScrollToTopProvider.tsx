import { ArrowUpIcon } from "@heroicons/react/24/outline";
import React, { createContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const ScrollToTopProvider = ({ children }: Props) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      setShowButton(scrollPosition > viewportHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`fixed bottom-4 right-4 p-2 bg-lime-400 dark:bg-neutral-800 rounded-full shadow-md cursor-pointer z-40 ${
          showButton
            ? "animate-fadeIn  opacity-100 scale-1"
            : "animate-fadeOut opacity-0"
        }`}
        onClick={scrollToTop}
      >
        <ArrowUpIcon className="w-4 h-4" />
      </div>
      {children}
    </>
  );
};

export default ScrollToTopProvider;
