import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";

import greek_salad from "./assets/greek_salad.jpg"
import bruchetta from "./assets/Bruchetta.svg"
import lemon_dessert from "./assets/Lemon_dessert.jpg"
import avatar_img from "./assets/avatar.png"

const special_items = [
  {
    name: "Greek Salad",
    price: 12.99,
    description: "The famous greek salad of crispy lettuce,peppers, olives and our Chicago style feta cheese, garnished withcrunchy garlic and rosemary croutons.",
    image: greek_salad
  },
  {
    name: "Bruchetta",
    price: 5.99,
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: bruchetta
  },
  {
    name: "Lemon Dessert",
    price: 5.00,
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is a authenthic as can be imagined.",
    image: lemon_dessert
  },
]

const testimonials_items = [
  {
    id: 0,
    rating: 4,
    name: "Rita Rodrigues",
    image: avatar_img,
    review: "Exceptional service and the food was amazing."

  },
  {
    id: 1,
    rating: 5,
    name: "Pedro Balsemão",
    image: avatar_img,
    review: "The restaurant exceeded our expectations."

  },
  {
    id: 2,
    rating: 4,
    name: "Maria Barros",
    image: avatar_img,
    review: "Presentation and service were top, i would recommend this restaurant."
  },
  {
    id: 3,
    rating: 3,
    name: "Rui Pinto",
    image: avatar_img,
    review: "The service was good."
  }
]

function Homepage() {
  return (
    <>
      <CallToAction />
      <Specials special_items={special_items} />
      <CustomersSay testimonials_items={testimonials_items} />
      <Chicago />
    </>
  )
}

export default Homepage
