import './Navbar.css'
const Navbar = () => {
    return (
      <div className='nav'>
        <img src='ey_logo.png' height={70} width={70}></img>
        <ul className="nav-menu">
            <li><div>Home</div></li>
            <li><div>Contact</div></li>
            <li><div>About</div></li>
            <li className='nav-log_out'>Logout</li>
        </ul>
  
      </div>
    )
  }
  
  export default Navbar