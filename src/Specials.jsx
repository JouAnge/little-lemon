import order_img from "./assets/bicycle.png"
import "./Specials.css"

function Specials({ special_items }) {
    return (
        <div className="specials">
            <div className="weeks_specials">
                <div><h2>This weeks specials!</h2></div>
                <div><button className="Menu_button">Online Menu</button></div>
            </div>
            <div className="Main_Menu">
                {special_items.map((item) =>
                    <div key={item.name} className="special_item">
                        <img className="special_item_image" src={item.image}></img>
                        <h3>{item.name}</h3>
                        <p className="item_description">{item.description}</p>
                        <button className="order_button">Order delivery<img className="order_img" src={order_img}></img></button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Specials