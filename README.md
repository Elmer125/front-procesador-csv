# Frontend Lista de contactos importando un csv

Para ejecutar esta aplicacion basta solo utilizar el comnando npm start 

Proceso de despliegue: npm run build para obtener la carpeta build, luego la copie al backend y desde alli hice el deploy a heroku


## Explicacion de lo desarrollado

utilizando react primero un create-react-app como para tener un proyecto base, elimine algunos archivos que no voy a utilizar. 

Luego creo las carpetas Components, Context, Services, Utilities.

En la carpeta Components creo mis componentes JSX los cuales voy a importar al archivo app.js

En Context creo mi archivo contact.context en el cual va a estar toda mi logica de aplicacion y en cual voy a utilizar useContext para pasar estados y funciones a los componentes

En Services en el archivo contact.services, esta la canexion a la api por medio de axios 

En Utilities cree un archivo Alert en el cual iba a controlar todas las alertas de la aplicacion, utilizando la libreria react-toastify


Tuve que utilizar sweetalert2 para las alertas de la aplicacion ya que toast no me funciono, supongo que es un problema con bootstrap 


## Por mejorar: 

    Utilice la libreria react-file-reader" y el componente que ella trae tiene un evento y este esta tomando todo el div que la contiene 

    Dividir en mas componentes mi componente Table.jsx 

    Arreglar las alertas 

    Pienso que cambiar la forma como estoy re cargando la tabla con el useEffect

    Mejorar diseño    
