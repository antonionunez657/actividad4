import logo from './logo.svg';
import './App.css';
//import styles from "./styles.module.css"
//import CardTest from './indexServicios';

/*
const users = [
  {
      titulo: "Titulo", 
      descripcion: "Descripcion",
      icono: "Icono1"},
  {
      titulo: "Titulo2", 
      descripcion: "Descripcion2",
      icono: "Icono2"},
  {
      titulo: "Titulo3", 
      descripcion: "Descripcion3",
      icono: "Icono3"},
  ]
*/
function App() {
  return (

    <div className="App">
          
      <header className="App-header">
          
        <header class="header"> 
            <nav class="nav">
              <a href="#" class="logo nav-link">STS</a>
                <ul class="nav-menu">
                  <li class="nav-menu-item">
                    <a href="#" class="nav-menu-link nav-link">Inicio</a>
                  </li>
                  <li class="nav-menu-item">
                    <a href="#" class="nav-menu-link nav-link">Nosotros</a>
                  </li>
                  <li class="nav-menu-item">
                    <a href="#" class="nav-menu-link nav-link">Contacto</a>
                  </li>
                  <li class="nav-menu-item">
                    <a href="#" class="nav-menu-link nav-link">Servicios</a>
                  </li>
                </ul>
            </nav>
        </header>

        <header class="top"> 
          <a class="info" >Soluciones Tecnologicas</a>
            <p class="info2">Brindamos soluciones tecnológicas innovadoras, creativas, para pequeñas y medianas empresas a traves del desarrollo de sistemas de software</p>
        </header>
      </header>

      <body>
          <a>Servicios</a>



      </body>

    </div>
  );
}

export default App;
//<title>navbar</title>
 //     <link rel="stylesheet" href="App.css"></link>

 /*
 <>
 <div className={styles.containerMain}>
   <div className={styles.containerContent}>
     <div>
       <div>
         <p>Descripcion: Esta es una pagina de prueba</p>
       </div>
       <br></br>
       <br></br>

       <div className={styles.cardslayout}>
       {users.map(user =>  (<CardTest titulo = {user.titulo} descripcion = {user.descripcion} icono={user.icono} ></CardTest>))}

       </div>

     </div>
   </div>
 </div>
          </>
*/