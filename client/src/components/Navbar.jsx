import { NavLink } from "react-router-dom"
import "./Navbar.css"
import { useAuth } from "../store/auth"

export const Navbar = () => {
    const {isLoggedIn} = useAuth();
    return (
        <>
  
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">DestinyDuo</a>
                {/* <img src="/images/sbt logo sm.jpg" alt="logo"/> */}

                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
                    <ul className="navbar-nav ms-auto p-4 p-lg-0">
                        <a className="nav-item nav-link active"  href="/">Home</a>
                        <a className="nav-item nav-link"  href="/about">About</a>
                        <a className="nav-item nav-link"  href="/services">Services</a>                       
                        <a className="nav-item nav-link"  href="/contact">Contact Us</a>           
                    </ul>
                    
                        {isLoggedIn ? (
                                <li><NavLink className="auth-btns" to="/logout">Logout</NavLink></li>
                            ):(
                                <>
                                <li><NavLink className="auth-btns" to="/register">Register</NavLink></li>
                                <li><NavLink className="auth-btns" to="/login">Login</NavLink></li>
                                </>
                            )}
                    
                </div>
            </div>
            </nav>
        </>
    )
}