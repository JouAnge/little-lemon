import { useNavigate } from "react-router-dom"
import restaurant_img from "./assets/restaurantfood.jpg"
import "./CallToAction.css"

function CallToAction() {
    const navigate = useNavigate();
    return (
        <div className="CallToAction_Lemon">
            <div>
                <h1 className="Name_lemon">Little Lemon</h1>
                <h3 className="CallToAction_chicago">Chicago</h3>
                <p className="description">We are a family owned Mediterranean restaurant,focused on traditional recipes served with a modern twist</p>
                <button className="table_button" onClick={() => { navigate("/reservation") }}>Reserve a Table</button>
            </div>
            <img className="restaurant_img" src={restaurant_img}></img>
        </div>
    )
}

export default CallToAction