import Footer from '../Footer/footer';
import Navbar from '../Navbar/navbar';

export default function AppLayout({ children }) {
  // console.warn(other);
  // console.warn(translate);
  // const t = useTranslations('AppLayout');

  return (
    <>
      <Navbar />
      <noscript title="Texto informativo que informa al usuario que el javascript se encuentra desactivado.">
        <p className="shadow bg-primary-1 text-white">
          Se ha detectado que tienes el Javascript deshabilitado, esto causará
          que algunas funciones de la página no estén disponibles.
        </p>
      </noscript>
      <main>{children}</main>
      <Footer />
    </>
  );
}
