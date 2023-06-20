import { useState } from "react";
import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import userRoutes from "app/routes/routes";
import { Link } from "react-router-dom";
import useDarkMode from "app/hooks/useDarkMode";
const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const { darkModeEnabled, toggleMode } = useDarkMode();
  return (
    <header>
      <div
        className={`z-20 bg-green-200/50 dark:bg-neutral-950/40 fixed w-full h-full left-0 text-center flex flex-col justify-center gap-4 text-lg md:opacity-0 backdrop-blur-md ${
          isOpenMobileMenu
            ? "animate-down md:animate-none opacity-100 top-0"
            : "animate-up opacity-0 top-[-100%]"
        }`}
      >
        {userRoutes.map((item) => {
          return (
            <div key={`sm-nav-${item.text}`}>
              {item.text && (
                <Link
                  className="cursor-pointer hover:text-green-500 m-color-transition"
                  onClick={() => {
                    setIsOpenMobileMenu(false);
                  }}
                  to={item.url}
                >
                  {item.text}
                </Link>
              )}
            </div>
          );
        })}
      </div>

      <nav className="z-30 flex items-center w-full bg-green-100 dark:bg-neutral-950 shadow-md fixed left-0 top-0">
        <div className="p-2">
          <img
            src="/assets/logo-light.png"
            className="w-28 block dark:hidden"
          />
          <img src="/assets/logo-dark.png" className="w-28 hidden dark:block" />
        </div>
        <div className="md:flex items-center gap-3 ml-4 hidden">
          {userRoutes.map((item) => {
            return (
              <div key={`lg-nav-${item.text}`}>
                {item.text && (
                  <Link
                    className="cursor-pointer hover:text-green-500 m-color-transition"
                    onClick={() => {
                      setIsOpenMobileMenu(false);
                    }}
                    to={item.url}
                  >
                    {item.text}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
        <div
          className="p-2 cursor-pointer hover:bg-green-400/10 dark:hover:bg-neutral-900 rounded-lg mr-1 md:mr-2 m-color-transition ml-auto"
          onClick={toggleMode}
        >
          {darkModeEnabled ? (
            <SunIcon className="w-5" />
          ) : (
            <MoonIcon className="w-5" />
          )}
        </div>
        <div
          className="p-2 cursor-pointer hover:bg-green-400/10 dark:hover:bg-neutral-900 rounded-lg mr-2 m-color-transition md:hidden"
          onClick={() => {
            setIsOpenMobileMenu(!isOpenMobileMenu);
          }}
        >
          <Bars3Icon className="w-5 " />
        </div>
      </nav>
    </header>
  );
};

export default Header;
