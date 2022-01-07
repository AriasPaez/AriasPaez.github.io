import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  // const t = useTranslations('Footer');
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="flex flex-col sm:flex-row justify-center items-center h-40 px-4 py-3 bg-primary-1 text-secondary-1 dark:bg-secondary-4 rounded-tr-[30%] sm:rounded-tr-[30%] lg:rounded-tr-[50%]">
      <span>
        Desarrollada con{' '}
        <Image
          src="/icons/heart.png"
          className=" "
          alt="Logo de leños"
          width="24"
          height="24"
        />{' '}
        y{' '}
        <Image
          src="/icons/brain.png"
          className=" "
          alt="Logo de leños"
          width="24"
          height="24"
        />{' '}
        por su servidor
        <Link href="/">
          <a className="font-semibold"> Cristian Arias </a>
        </Link>
        © {currentYear}
      </span>
    </footer>
  );
}
