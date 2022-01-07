import pick from 'lodash/pick';
import { useTranslations } from 'next-intl';
// import { NextIntlProvider, useTranslations } from 'next-intl';
// import Footer from '../components/Footer/footer';

export default function Index() {
  const t = useTranslations('Index');
  // const { t } = useTranslation('index');
  /* <Footer /> */
  return (
    <>
      <main className="px-4 sm:px-[20%] py-4">
        <section className="rounded-lg shadow-secondary-4 shadow-2xl px-8 py-8 dark:bg-secondary-3">
          <h1 className="text-center text-2xl dark:text-secondary-1">
            Sobre me
          </h1>
          <p className="sm:columns-2 lg:columns-1 text-justify indent-5 dark:text-secondary-1">
            Vale, pues qué te cuento, mi nombre es Cristian Andrés Arias Páez.
            Estudiante en terminación academica de Ingeniería de Sistemas en la
            Universidad Pedagógica y Tecnológica de Colombia (UPTC). Me encanta
            desarrollar páginas web y resolver problemas utilizando algoritmos,
            lo que me genera un apasionado gusto por el desarrollo de frontend y
            backend. Entre mis aficiones suelo leer un libro (quiero tener mi
            biblioteca personal en casa), hacer ejercicio todos los días, salir
            a pasear con mi mascota y comer.
          </p>
        </section>
      </main>
    </>
  );
}
// Index.messages = ['Index', ...AppLayout.messages];
Index.messages = ['Index'];
export async function getStaticProps({ locale }) {
  try {
    const translations = await import(`../translations/${locale}.json`);
    return {
      props: {
        messages: pick(translations, Index.messages),
      },
    };
  } catch (error) {
    console.error(`Cannot get file from folder ${locale}`);
    return {
      props: { title: 'title default' },
    };
  }
}
