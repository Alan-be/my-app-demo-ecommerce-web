import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-foreground mx-auto w-full text-center text-white">
      <div className="px-6 py-8 xl:pb-12">
        <h2 className="font-bold text-xl xl:text-3xl leading-snug">
          Quieres pedidos especiales? <br></br>Contactanos por Whatsapp.
        </h2>
        <a
          className="inline-block bg-secondary-dark hover:bg-sky-700 shadow-xl mt-8 xl:mt-10 px-12 py-5 border border-transparent rounded-full focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-999 font-medium text-lg leading-tight focus:outline-none"
          href="#"
        >
            Envia ya!
        </a>
        <div className="mt-14 xl:mt-20">
          <nav className="flex flex-wrap justify-center font-medium text-lg">
            <div className="px-5 py-2">
              <a href="#">Contacto</a>
            </div>
            <div className="px-5 py-2">
              <a href="#">Precio</a>
            </div>
            <div className="px-5 py-2">
              <a href="#">Privacidad</a>
            </div>
            <div className="px-5 py-2">
              <a href="#">Terminos y Condiciones</a>
            </div>
            <div className="px-5 py-2">
              <a href="#">Twitter</a>
            </div>
          </nav>
          <p className="mt-7 text-base">© 2024 Innavanti</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
