import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const MostarErrores = (errors) => {
  for (const error of errors) {
    toastInfo(error.message);
  }
};

var tiempo_default = 5000;
var ver_barra_default = false;

const toastInfo = (
  mensaje,
  tiempo = tiempo_default,
  ver_barra = ver_barra_default
) => {
  toast.info(mensaje, {
    position: "top-right",
    autoClose: tiempo,
    hideProgressBar: ver_barra,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const toastError = (
  mensaje,
  tiempo = tiempo_default,
  ver_barra = ver_barra_default
) => {
  toast.error(mensaje, {
    position: "top-right",
    autoClose: tiempo,
    hideProgressBar: ver_barra,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const toastSuccess = (
  mensaje,
  tiempo = tiempo_default,
  ver_barra = ver_barra_default
) => {
  toast.success(mensaje, {
    position: "top-right",
    autoClose: tiempo,
    hideProgressBar: ver_barra,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const toastWarning = (
  mensaje,
  tiempo = tiempo_default,
  ver_barra = ver_barra_default
) => {
  toast.warning(mensaje, {
    position: "top-right",
    autoClose: tiempo,
    hideProgressBar: ver_barra,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export  { MostarErrores, toastInfo, toastError, toastSuccess, toastWarning };
