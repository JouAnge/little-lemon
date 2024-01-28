import avatar_img from "./assets/avatar.png"
import "./CustomersSay.css"

const stars = (rating) => {
    rating = Math.min(Math.max(rating, 0), 5);
    const starString = "★".repeat(rating) + "☆".repeat(5 - rating);

    return starString
}

function CustomersSay({ testimonials_items }) {
    return (
        <div className="testimonials">
            <h1 className="testimonials-title">Testimonials</h1>
            <div className="testimonials-content">
                {testimonials_items.map((testimonial) =>
                    <div className="testimonial" key={testimonial.id}>
                        <p>{stars(testimonial.rating)}</p>
                        <div className="testimonial_user">
                            <img src={avatar_img}></img>
                            <h4>{testimonial.name}</h4>
                        </div>
                        <q>{testimonial.review}</q>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CustomersSay
