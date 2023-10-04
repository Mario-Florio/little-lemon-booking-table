import greekSaladImg from "./images/greek-salad.jpg";
import lemonDessertImg from "./images/lemon-dessert.jpg";
import bruchettaImg from "./images/bruchetta.svg";

const specials = [
    {
        name: "Greek salad",
        price: "$12.99",
        desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        img: greekSaladImg,
    },
    {
        name: "Bruchetta",
        price: "$5.99",
        desc: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        img: bruchettaImg,
    },
    {
        name: "Lemon Dessert",
        price: "$5.00",
        desc: "This comes straight from grandma's recipe book, every lst ingredient has been sourced and is as authentic as can be imagined.",
        img: lemonDessertImg,
    },
];

export default specials;
