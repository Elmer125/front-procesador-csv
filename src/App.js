import React, { useContext } from "react";
import "./App.css";
import ReactFileReader from "react-file-reader";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "./Components/Table";
import { ContactContext } from "./Context/contact-context";

function App() {
  const { handleFiles, textarea, handleSubmit, data } =
    useContext(ContactContext);
  return (
    <div className="App container">
      <h1 className="mt-2"> Lista contactos CSV </h1>

      <div className="mb-3">
        <ReactFileReader handleFiles={handleFiles} fileTypes={".csv"}>
          <button className="btn btn-primary">Cargar lista</button>
        </ReactFileReader>
      </div>

      {data ? <h4>Vista Previa</h4> : <h4>Plantilla CSV</h4>}
      <textarea className="w-100" value={textarea} readOnly></textarea>
      <button className=" mt-3 btn btn-primary" onClick={handleSubmit}>
        Enviar CSV
      </button>
      <div className="row mt-3">
        <div className="col-xs-6">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
