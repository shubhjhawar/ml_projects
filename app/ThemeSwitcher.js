"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { moon_icon, sun } from "@/assets";
import Image from "next/image";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <button
          type="button"
          onClick={toggleTheme}
          className='cursor-pointer w-14'
        >
          <div className={`w-12 h-6 rounded-full p-1 duration-300 ease-in-out cursor-pointer bg-gray-300 dark:bg-white `}>
            <div className={`flex gap-2`}>
           

            <div className="flex gap-2">
              <Image
                src={sun}
                alt="icon"
                className={`w-4 h-4`}
              />
              <Image
                src={moon_icon}
                alt="icon"
                className={`w-4 h-4`}
              />
              </div>
            </div>

            <div
              className={`relative bottom-4 w-4 h-4 z-10 rounded-full duration-300 ease-in-out transform bg-gray-600 dark:bg-slate-950 dark:translate-x-6 `}
            />
          </div>
        </button>
    </div>
  );
};

export default ThemeSwitcher;
