import React, { useState, useEffect, useContext } from "react";
import { ContactContext } from "../Context/contact-context";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "./Spinner";
import contactServices from "../Services/contact.services";

export const Table = () => {
  const { textarea, loading, setLoading, MySwal } = useContext(ContactContext);
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    setLoading(true);
    contactServices
      .getAll()
      .then((res) => {
        setLoading(false);
        setDatos(res.data);
      })
      .catch(async (error) => {
        await MySwal.fire({
          html: <i>{error.message}</i>,
          icon: "error",
        });
        setLoading(false);
      });
  }, [textarea]);

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Contacto</th>
          </tr>
        </thead>
        <tbody>
          {loading && <Spinner />}
          {datos &&
            datos.map((element) => {
              if (Object.keys(element).length !== 0) {
                return (
                  <tr key={element.id}>
                    <td>{element.name}</td>
                    <td>{element.lastname}</td>
                    <td>{element.phone}</td>
                  </tr>
                );
              }
            })}

          {datos.length === 0 && !loading && (
            <tr>
              <td></td>
              <td>Sin datos</td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
