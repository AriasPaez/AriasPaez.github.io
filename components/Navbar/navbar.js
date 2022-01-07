import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [theme, setTheme] = useState(null);

  const imgButtonTheme =
    theme === 'dark' ? '/icons/firewood.png' : '/icons/wood.png';

  useEffect(function getLocalThemeInState() {
    if (theme === null) {
      console.log('getLocalThemeInState');
      setTheme(localStorage.theme);
    }
  });
  // const getLocalThemeInState = ;

  useEffect(function setLocalTheme() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme !== theme) {
      console.log('getLocalThsetLocalThemeemeInState');
      if (theme === 'dark') {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
      } else {
        localStorage.theme = '';
        document.documentElement.classList.remove('dark');
      }
    }
  });

  return (
    <>
      <header className="px-4 py-3 bg-primary-1 text-secondary-1 dark:bg-secondary-4">
        <nav className="flex justify-between content-center ">
          <Link href="/">
            <a className="text-xl">Cristian Arias</a>
          </Link>
          <button
            type="button"
            className="flex  bg-secondary-1 dark:bg-secondary-2 py-1 px-1 rounded-full"
            onClick={() => {
              setTheme(theme === 'dark' ? '' : 'dark');
            }}
          >
            <Image
              src={imgButtonTheme}
              className=" "
              alt="Logo de leños"
              width="32"
              height="32"
            />
          </button>
        </nav>
        {/* Hero */}
      </header>
      <div className="flex flex-col sm:flex-row justify-center items-center min-h-72 sm:h-80 md:h-96 px-4 py-3 pb-16 bg-primary-1 text-secondary-1 dark:bg-secondary-4 rounded-bl-[30%] sm:rounded-bl-[30%] lg:rounded-bl-[50%]">
        <Image
          src="/icons/photoMe.jpg"
          className="rounded-full h-40 w-40"
          alt="Logo de leños"
          width="300"
          height="300"
        />
        <div>
          <h1 className="text-center sm:text-right text-3xl sm:text-6xl">
            Hola!
          </h1>
          <p className="text-center sm:text-right text-base sm:text-xl sm:pl-8 lg:text-2xl">
            Bienvenido, soy un desarrollador web fullstack.
          </p>
        </div>
      </div>
    </>
  );
}
