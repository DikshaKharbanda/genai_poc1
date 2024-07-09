import './Navbar.css'
const Navbar = () => {
    return (
      <div className='nav'>
        <div className='nav-logo'><img src='ey_logo.png' height={70} width={70} ></img></div>
        <ul className="nav-menu">
            <li><div className='test'>Home</div></li>
            <a><li><div>Contact</div></li></a>
            <a><li><div>About</div></li></a>
            <a href= "/">
            <li className='nav-log_out'>Logout</li></a>
        </ul>
  
      </div>
    )
  }
  
  export default Navbar