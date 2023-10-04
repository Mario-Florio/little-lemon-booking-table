import "./Specials.css";
import specials from "./specialsData";
import { Link } from "react-router-dom";

function Specials() {
    return(
        <section className="specials">
            <header>
                <h3>This Weeks Specials!</h3>
                <Link>Online Menu</Link>
            </header>
            <section className="specials__mainContent">
                {specials.map(special => 
                    <Card key={special.name} img={special.img} name={special.name} price={special.price} desc={special.desc}/>)
                }
            </section>
        </section>
    )
}

export default Specials;

function Card(props) {

    const { img, name, price, desc } = props;

    return(
        <article className="card">
            <img src={img} alt={name}/>
            <div className="card__content">
                <header>
                    <h4>{name}</h4>
                    <span>{price}</span>
                </header>
                <p>{desc}</p>
                <footer>Order Delivery</footer>
            </div>
        </article>
    )
}