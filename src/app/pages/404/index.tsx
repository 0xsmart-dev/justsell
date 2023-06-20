import React, { useContext, useEffect } from "react";
import { LoadingContext } from "app/components/LoadingProvider";
import ReactLottie from "lottie-react";
import lottie404 from "app/config/data/lottie/lottie404.json";
import { Link } from "react-router-dom";

const Error404 = () => {
  const { isLoading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
    return () => {};
  }, []);

  return (
    <div className="flex flex-col h-[100vh] justify-center gap-[10vh]">
      <ReactLottie
        animationData={lottie404}
        loop={true}
        className="w-full max-w-[600px] mx-auto"
      />
      <Link to={"/dashboard"} className="bg-green-400 p-3 px-6 w-fit mx-auto">
        Redirect To Dashboard
      </Link>
    </div>
  );
};

export default Error404;
