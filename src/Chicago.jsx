import mario_adrian from "./assets/Mario_Adrian.jpg"
import restaurant from "./assets/restaurant.jpg"

import "./Chicago.css"

function Chicago() {
    return (
        <div className="chicago">
            <div className="chicago_description">
                <h1 className="Name">Little Lemon</h1>
                <h3 className="chicago_title">Chicago</h3>
                <p className="restaurant_description">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant feaurures a locally-sourced menu with daily specials.</p>
            </div>
            <div className="chicago_images">
                <img className="restaurant" src={restaurant}></img>
                <img className="mario_adrian" src={mario_adrian}></img>
            </div>
        </div>

    )
}

export default Chicago