import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import contactServices from "../Services/contact.services";
const ContactContext = React.createContext();

const plantilla = `name;lastname;phone;
Mauricio;Marulanda;5569872134;
Pedro;Sanchez;8529874512;
Juan;Pedrozo;821654987;
`;
const ContactProvider = (props) => {
  const MySwal = withReactContent(Swal);
  const [textarea, setTextarea] = useState(plantilla);
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const handleFiles = (files) => {
    let reader = new FileReader();
    reader.onload = function (e) {
      const result = csvToObjects(reader.result, ";");
      setData(result);
      setTextarea(reader.result);
    };
    reader.readAsText(files[0]);
  };
  const handleSubmit = () => {
    setLoading(true);
    contactServices
      .create(data)
      .then(async (item) => {
        await MySwal.fire({
          title: <strong>Buen trabajo</strong>,
          html: <i>Creado con Exito!</i>,
          icon: "success",
        });
        setData(undefined);
        setTextarea(plantilla);
        setLoading(false);
      })
      .catch(async (error) => {
        await MySwal.fire({
          html: <i>{error.response.data.message}!</i>,
          icon: "error",
        });
        setData(undefined);
        setTextarea(plantilla);
        setLoading(false);
      });
  
  };

  function csvToObjects(csv, separator) {
    const lines = csv.split("\n");
    //sacamos el primer elemento, los headers
    const headers = lines.shift().split(separator);

    const data = lines.map((line) => {
      // para cada línea obtenemos los campos o columnas
      // y rellenamos un objeto con los valores
      const columns = line.split(separator);
      const obj = {};
      columns.forEach((column, index) => {
        // después del último separador puede haber un vacío,
        // en ese caso no lo guardamos
        if (column) {
          obj[headers[index]] = column;
        }
      });
      return obj;
    });
    return data;
  }

  return (
    <ContactContext.Provider
      value={{
        textarea,
        setTextarea,
        data,
        setData,
        handleFiles,
        handleSubmit,
        loading,
        setLoading,
        MySwal,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };
