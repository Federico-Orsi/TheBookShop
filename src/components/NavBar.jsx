import CartWidget from './CartWidget';
import { ContainerRenderizado } from '../components/ContainerRenderizado';
import { Link } from 'react-router-dom';
         

const NavBar = () => {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark position-relative">
  <div className="container-fluid">
     
     <Link to="/" className="navbar-brand text-light me-5" style={{'color' : 'white'}}> The Book Shop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="d-flex justify-content-evenly margin-left10 navbar-nav mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link to="/genero/9" className="nav-link active text-light ms-5" style={{'color' : 'white' , 'textDecoration' : 'none'}}>Best Sellers</Link>
        </li>
        <li className="nav-item">
          <Link to="/genero/1" className="nav-link text-light ms-5" style={{'color' : 'white'}}>Desarrollo Personal</Link>
        </li>
        <li className="nav-item">
          <Link to="/genero/5" className="nav-link text-light ms-5" style={{'color' : 'white'}}>Finanzas</Link>
        </li>
        
      </ul>
      <span className="navbar-text text-light cartPosition">
      <CartWidget></CartWidget>
      </span>
    </div>
  </div>
</nav>
      </>
    );
  }
  
  export default NavBar;



