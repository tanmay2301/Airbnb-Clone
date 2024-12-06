import logo from "../assets/airbnb 1.png"

function Navbar(){
    return(
        <>
            <nav className="navbar">
                <img src={logo} className="navbar image"></img>
            </nav>
        </>
    )
}

export default Navbar;