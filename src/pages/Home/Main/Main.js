import "./Main.css";
import specials from "./special";

function Main() {
    return(
        <main className="home__main">
            <div className="home__mainHeader">
                <h3>This Weeks Specials!</h3>
                <a href="/menu">Online Menu</a>
            </div>
            <div className="home__mainContent">
                {specials.map(special => 
                    <Card key={special.name} img={special.img} name={special.name} price={special.price} desc={special.desc}/>)
                }
            </div>
        </main>
    )
}

export default Main;

function Card(props) {

    const { img, name, price, desc } = props;

    return(
        <article>
            <img src={img} alt={name}/>
            <div className="card__content">
                <div className="card__header">
                    <h4>{name}</h4>
                    <span>{price}</span>
                </div>
                <p>{desc}</p>
                <span className="card__footer">Order Delivery</span>
            </div>
        </article>
    )
}