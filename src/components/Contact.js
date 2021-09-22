import { useContext, useState, useRef } from "react";
import emailjs from "emailjs-com";
import { LanguageContext } from "../context/LanguangeContext";

const Contact = () => {
  const languageContext = useContext(LanguageContext);
  const { data } = languageContext;
  const form = useRef();
  //State
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    //Prevenir recarga de formulario
    e.preventDefault();

    //Validar

    //Enviar mail
    emailjs
      .sendForm(
        "gmailMessage",
        "template_e1qbhgi",
        e.target,
        "user_Kox2MD4tSOJ30mjtdhQo6"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    //Limpiar formulario
    setMail({
      name: "",
      phone: "",
      message: "",
    });
  };

  const { name, email, message } = mail;

  return (
    <div id={data.contact[0]} className="container-contact">
      <div className="contact-data">
        <p className="fontTitulos">pozzolofrance@gmail.com</p>
        <p className="fontTitulos">+54 9 (0351) 156806968</p>
        <p className="fontTitulos">Córdoba, Argentina</p>
      </div>
      <div>
        <h2 className="fontTitulos contact-title">Contactame</h2>
        <form className="container-form" ref={form} onSubmit={sendEmail}>
          <div className="container-inputs">
            <input
              type="text"
              name="name"
              className="fontTexto"
              placeholder="Ingresá tu nombre"
            />
            <input
              type="email"
              name="email"
              className="fontTexto"
              placeholder="Ingresá tu mail"
            />
          </div>
          <textarea
            name="message"
            className="fontTexto"
            placeholder="Escribe tu mensaje"
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
