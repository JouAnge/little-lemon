import "./Header.css"
import Nav from "./Nav"
import logo from "./assets/little_lemon.svg"

function Header() {
    return (
        <header className="flex-header"  >
            <img className="logo" src={logo}></img>
            <Nav />
        </header>
    )
}

export default Header