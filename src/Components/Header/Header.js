import "./Header.css";
import reservationImg from "../../images/reservations.jpg";

function Header() {
    return(
        <header>
            <section>
                <h1>Reservations</h1>
                <h2>Book Ahead!</h2>
                <p>Just fill out the form below and we will find you available seating.</p>
            </section>
            <img src={reservationImg} alt="Reserved table for you!"/>
        </header>
    );
}

export default Header;