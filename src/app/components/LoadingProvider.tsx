import React, { useState } from "react";
import ReactLottie from "lottie-react";
import lottieLoading from "app/config/data/lottie/lottieLoading.json";

type Props = {
  children: React.ReactNode;
};

type ContextProps = {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
};

export const LoadingContext = React.createContext<ContextProps>({
  isLoading: false,
  setLoading: () => {},
});

const LoadingProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = (value: boolean) => {
    setIsLoading(value);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {isLoading && (
        <div className="fixed w-full h-full left-0 top-0 z-50 bg-green-200 dark:bg-neutral-950">
          <div className="w-[200px] mx-auto mt-[50vh] translate-y-[-50%]">
            <img
              src="/assets/logo-simple.png"
              className="w-[160px] mx-auto"
            ></img>
            <ReactLottie
              animationData={lottieLoading}
              loop={true}
              className="w-full mt-[-40px]"
            />
          </div>
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
