import CartWidget from './CartWidget';
import { ContainerRenderizado } from '../components/ContainerRenderizado';
import { Link } from 'react-router-dom';
         

const NavBar = () => {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark position-relative">
  <div className="container-fluid">
     
     <a className="navbar-brand text-light me-5"><Link to="/" style={{'color' : 'white' , 'text-decoration' : 'none'}}>The Book Shop</Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="d-flex justify-content-evenly margin-left10 navbar-nav mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className="nav-link active text-light ms-5" aria-current="page" href="#"><Link to="/genero/9" style={{'color' : 'white' , 'text-decoration' : 'none'}}>Best Sellers</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light ms-5" href="#"><Link to="/genero/1" style={{'color' : 'white' , 'text-decoration' : 'none'}}>Desarrollo Personal</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light ms-5" href="#"><Link to="/genero/5" style={{'color' : 'white' , 'text-decoration' : 'none'}}>Finanzas</Link></a>
        </li>
        
      </ul>
      <span className="navbar-text text-light cartPosition">
      <CartWidget/>
      </span>
    </div>
  </div>
</nav>
      </>
    );
  }
  
  export default NavBar;



