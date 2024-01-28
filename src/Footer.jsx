import "./Footer.css"
import logo from "./assets/footer.png"

function Footer() {
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

    const contacts = [
        {
            type: "Address",
            value: "Little Lemon, 1 Hacker Way, Menlo Park, CA"
        },
        {
            type: "Phone number",
            value: "+1 650-853-1300"
        },
        {
            type: "Email",
            value: "restaurant@littlelemon.com"
        }

    ]

    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <img src={logo}></img>
                </div>
                <div>
                    <h3>Navigation</h3>
                    <ul className="footer-list">
                        {menuItems.map((item) =>
                            <li className='list-footer-item' key={item.title}><a className='footer-anchor' href={item.link}>{item.title}</a></li>
                        )}
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul className="footer-list">
                        {contacts.map(
                            (item) => <li key={item.type}>{item.value}</li>
                        )}
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul className="footer-list">
                        <li><a href="https://facebook.com/littlelemon">Facebook</a></li>
                        <li><a href="https://instagram.com/littlelemon">Instagram</a></li>
                        <li><a href="https://twitter.com/littlelemon">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer