import { useState, createContext, useEffect } from "react";
import spanish from "../spanish.json";
import english from "../english.json";

//Creo el context
export const LanguageContext = createContext();

const LanguageProvider = (props) => {
  //Creo el state inicial del context
  const [language, setLanguage] = useState("ES");
  const [data, setData] = useState(spanish);

  useEffect(() => {
    if (language === "ES") {
      setData(spanish);
    } else {
      setData(english);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, data, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
