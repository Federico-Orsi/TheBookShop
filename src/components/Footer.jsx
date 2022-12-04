



const Footer = () => {
    return (
      <>
      <section style={{ height: '250px'}} className="d-flex justify-content-around bg-dark text-light">
       <div className="mt-4">
       <h6 className="hoover">CONTACTO</h6>
       <p style={{ fontSize: 'small'}} className="mt-5">Av. Siempre Viva 2400 - CABA - Argentina </p>
       <p style={{ fontSize: 'small'}} className="hoover" >thebookshop@gmail.com</p>
       <div style={{ fontSize: 'small'}}>
       <span>011 4829-3698</span>
       <span className="ms-3">Lunes a Viernes - 9 a 18hs</span>
       </div>
       
       </div>
       
       
       <div className="mt-4">
       <h6 className="hoover">ENVÍO</h6>
       <div style={{ fontSize: 'small'}} className="mt-5">
       <p className="bi bi-truck d-inline hoover"></p><span className="ms-2 hoover">Consultar</span>
       </div>
       
       </div>
       
       <div className="mt-4">
       <h6 className="hoover">MI CUENTA</h6>
       <p style={{ fontSize: 'small'}} className="mt-5 hoover">Ingresar</p>
       <p style={{ fontSize: 'small'}} className="hoover">Registrarse</p>
       <p style={{ fontSize: 'small'}} className="hoover">Favoritos</p>
       </div>

      </section>


      </>
    );
  }
  
  export default Footer;

