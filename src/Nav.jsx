import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {
    const menuItems = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Menu",
            link: "/menu"
        },
        {
            title: "Reservations",
            link: "/reservation"
        },
        {
            title: "Order online",
            link: "/oder"
        },
        {
            title: "Login",
            link: "/login"
        }
    ]

    return (
        <nav>
            <ul className='list-nav'>
                {menuItems.map((item) =>
                    <li className='list-nav-item' key={item.title}><Link className='ancor-nav' to={item.link}>{item.title}</Link></li>
                )}
            </ul>
        </nav >
    )
}

export default Nav