import CartWidget from './CartWidget';


const NavBar = () => {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark position-relative">
  <div className="container-fluid">
    <a className="navbar-brand text-light me-5">The Book Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="d-flex justify-content-evenly margin-left10 navbar-nav mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className="nav-link active text-light ms-5" aria-current="page" href="#">Best Sellers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light ms-5" href="#">Recomendados</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light ms-5" href="#">No podes No Leerlos</a>
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